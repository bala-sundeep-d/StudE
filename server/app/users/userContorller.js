const jwt    = require('jsonwebtoken');

const signin = (req, res) => {
	const db = { userId: '123456', password: 'pass@123' };
    const userId = req.body.userId;
	const password = req.body.password;

	if (userId !== db.userId) {
		return res.send("invalid user id");
	}
	if (password !== db.password) {
		return res.send("invalid password");
	}

	var payload = {
		currentUser: userId
	}

	var token = jwt.sign(payload, 'group_4', { expiresIn: '1h' });
	res.cookie('auth_token',token);
   	res.send('LOGIN_SUCCESS');
};

const signout = (req, res) => {
	res.clearCookie("auth_token");
	res.sendStatus(200);
};

const userList = (req, res) => {
	res.send("hello");
};

module.exports = {
    signin,
	userList,
	signout
};