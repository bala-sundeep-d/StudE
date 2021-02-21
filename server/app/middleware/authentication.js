const jwt    = require('jsonwebtoken');

const authenticate = (req, res, next) => {
	var mytoken = req.cookies.auth_token;
	const db = { userId: '123', password: 'hello' };
	if (mytoken) {
		mytoken = jwt.verify(mytoken, 'group_4');
		if (db.userId === mytoken.currentUser) {
			return next();
		}
	}
	else
	res.redirect("/");
}


module.exports = {
    authenticate
}