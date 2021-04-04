const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const BlueBirdPromise = require('bluebird');

const signin = (req, res, next) => {
	const userId = req.body && req.body.userId;
	const password = req.body && req.body.password;

	if (!userId) {
		return res.send("invalid userId");
	}

	if (!password) {
		return res.send("invalid password");
	}

	User.findOne({ userId }, (err, data) => {
		if (err) {
			return res.send(err);
		}

		if (!data) {
			return res.send("no records found");
		}

		if (!bcrypt.compareSync(password, data.password)) {
			return res.send("invalid password");
		}

		const payload = {
			currentUser: userId
		}
		const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
		res.cookie('auth_token', token);
		return res.send({
			message: 'LOGIN_SUCCESS',
			user: data
		});
	});
};

const signout = (req, res) => {
	res.clearCookie("auth_token");
	res.sendStatus(200);
};

const userList = (req, res) => {
	const query = {};
	query.instituteId = req.query && req.query.instituteId;
	const role = req.query && req.query.role;
	if (role) query.role = role;
	if (_.isEmpty(query) || !query.instituteId) return res.send("invalid request. Please enter a institute id")
	User.find(query, (err, data) => {
		if (err) return res.send(err);
		return res.send(data);
	});
};

const importUsers = (req, res) => {
	const users = req.body && req.body.users;
	const saltRounds = process.env.SALT_ROUNDS;
	const salt = bcrypt.genSaltSync(saltRounds);
	if (_.isEmpty(users)) return res.send('no users to import');
	const dbArray = _.isArray(users) ? users : [users];
	_.forEach(dbArray, (user, index) => {
		if (!user.firstName) return res.send(`First name missing in ${index + 1} record`);
		if (!user.lastName) return res.send(`Last name missing in ${index + 1} record`);
		if (!user.userId) return res.send(`User id missing in ${index + 1} record`);
		if (!user.role) return res.send(`User role missing in ${index + 1} record`);
		if (!user.instituteId) return res.send(`Institute id missing in ${index + 1} record`);
		const userPassword = bcrypt.hashSync(`${user.lastName}@123`, salt);
		user.password = userPassword;
	});

	User.create(users, (err, data) => {
		if (err) return res.send(err);
		res.send('import successful');
	});
}

const getStudentByTeacherId = (req, res) => {

	const teacherId = req.query && req.query.teacherId;
	User.find({ "_id": teacherId }, (err, d) => {
		if (err) return res.send(err);
		const subjectId = d[0].subjectIds[0];

		if (subjectId) {
			User.find({ "role": "student", "subjectIds": subjectId }, (error, data) => {
				const dataToSend = [];
				for (const student of data) {
					student['subjectIds'] = subjectId;
					dataToSend.push(student);
				}
				res.send(dataToSend);
			});
		}
	});
}
module.exports = {
	signin,
	userList,
	signout,
	importUsers,
	getStudentByTeacherId
};