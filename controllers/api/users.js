// creates the json web token
const jwt = require('jsonwebtoken');
// require user in order to be able to create a user
const User = require('../../models/user');
// require bcrypt for login
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
};

// check login button
function checkToken(req, res) {
    // console log user
    console.log('req.user', req.user);
    // json response will be the expiration date, set in middleware also
    res.json(req.exp);
}

// login - existing user
async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json('Bad Credentials');
    }
}

// signup - new user
async function create(req, res) {
    try {
        // add user to database
        const user = await User.create(req.body);
        // JWT token - will be a string
        const token = createJWT(user);
        // send back the token string
        res.json(token);
    } catch (err) {
        // Client will check for non-2xx statis code, 400 = bad request
        res.status(400).json(err);
    }
}

/*-- JWT Helper Functions for user sign-up and login --*/
function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}