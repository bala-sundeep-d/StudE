const express    = require('express');
const context = require('express-context-store');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cp = require('cookie-parser');
const BlueBirdPromise = require('bluebird');
const cors = require('cors');
const authRouter = require('./app/routes/authRouter');
const { authenticate } = require('./app/middleware/authentication');
const app	= express();
app.use(context());
dotenv.config();

const PORT = process.env.PORT || 8000;
const allowCors = (process.env.NODE_ENV === "development")
					? {credentials: true, origin: process.env.CLIENT} : {};

app.use(cors(allowCors));
app.use(cp());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));

app.use(express.static(path.join(__dirname, '../client/build/')));

app.get(['/', '/dashboard', '/login'], (req, res) => { // to be updated
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(authRouter); // login

app.use((req, res, next) => authenticate(req, res, next)); // authentication middleware

app.use(require('./app/routes')); // app routes

app.use('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const connectDB = () => new BlueBirdPromise((resolve, reject) => {
	// db connection
	mongoose.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	  }, (err) => {
		if (err) return reject('error while connecting to backend', err);
		else return resolve();
	});
});

const startApp = () => new BlueBirdPromise((resolve, reject) => {
	app.listen(PORT, () => {
		return resolve();
	});
});

connectDB()
	.then(() => console.log('connected to backend'))
	.then(startApp)
	.then(() => console.log('server is running on ' + PORT))
	.catch(err => console.log(err));