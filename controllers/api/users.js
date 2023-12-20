// creates the json web token
const jwt = require('jsonwebtoken');
// require user in order to be able to create a user
const User = require('../../models/user');
// require bcrypt for login
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
    changeName,
    changePassword,
    deleteAccount
};


// delete user 
async function deleteAccount(req, res) {
    try {
        // find user by id
        const user = await User.findById(req.user._id);
        // delete user
        await user.remove();
        // send back a 200 status
        res.status(200).json('User Deleted');
    } catch (err) {
        // send back a 400 status
        res.status(400).json(err);
    }
}

// change password
async function changePassword(req, res) {
    try {
        // find user by id
        const user = await User.findById(req.user._id);
        // compare old password to new password
        const match = await bcrypt.compare(req.body.oldPassword, user.password);
        // if passwords match
        if (match) {
            // update password
            user.password = req.body.newPassword;
            // save user
            await user.save();
            // create a new token
            const token = createJWT(user);
            // send it back to the client
            res.json(token);
        } else {
            // if passwords don't match
            throw new Error();
        }
    } catch (err) {
        // if old password doesn't match
        if (!req.body.oldPassword) {
            return res.status(400).json(err);
        }
    }
}

// change name
async function changeName(req, res) {
    try {
        // find user by id
        const user = await User.findById(req.user._id);
        // update name
        user.name = req.body.name;
        // save user
        await user.save();
        // create a new token
        const token = createJWT(user);
        // send it back to the client
        res.json(token);
    } catch (err) {
        if (!req.body.name) {
            return res.status(400).json(err);
        }
    }
}

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