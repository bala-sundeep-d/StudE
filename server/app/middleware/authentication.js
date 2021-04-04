const jwt    = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticate = (req, res, next) => {
	let mytoken = req.cookies.auth_token;
	if (mytoken) {
		try {
			mytoken = jwt.verify(mytoken, process.env.SECRET);
		} catch(e) {
			res.clearCookie("auth_token");
			req.session.destroy();
			return res.redirect("/");
		}
		User.findOne({ userId: mytoken.currentUser }, (err, user) => {
			if (err) return res.send("unable to fetch user");
			if (user && user.userId) {
				req.context.set('user', JSON.parse(JSON.stringify(user)));
				return next();
			} else {
				res.clearCookie("auth_token");
				return res.redirect("/");
			}
		});
	}
	else
	return res.redirect("/");
}


module.exports = {
    authenticate
}