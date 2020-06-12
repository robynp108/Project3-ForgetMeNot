const jwt = require("jsonwebtoken");
const db = require('./models');

const secret = "something";

function authenticateUser(user, password) {
    if (!user) {
        throw new Error("Incorrect username.", 401);
    }
    if (!user.validPassword(password)) {
        throw new Error('Incorrect password.", 401');
    }
}

function generateJwt(userId) {
    return jwt.sign({ sub: userId }, secret);
}

function authenticateJwt( { headers }) {
    const payload = jwt.verify(headers.authorization, secret);
    return db.User.findOne({ _id: payload.sub });
}

module.exports = {
    generateJwt,
    authenticateUser,
    authenticateJwt,
};