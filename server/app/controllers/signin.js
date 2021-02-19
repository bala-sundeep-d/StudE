
const signin = (req, res, next) => {
    res.send('logged in successfully');
    next();
}

module.exports = {
    signin,
};