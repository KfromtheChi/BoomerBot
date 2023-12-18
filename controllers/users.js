// creates the json web token
const jwt = require('jsonwebtoken');
// require user in order to be able to create a user
const User = require('../models/user');
// require bcrypt for login
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
    changeName
};


// change name
// async function changeName(req, res) {
//     try {
//         // find user by id
//         const user = await User.findById(req.user._id);
//         // update name
//         user.name = req.body.name;
//         // save user
//         await user.save();
//         // create a new token
//         const token = createJWT(user);
//         // send it back to the client
//         res.json(token);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// }

async function changeName(newName) {
    const response = await fetch('/change-name', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }), // This is where you set req.body.name
    });

    if (!response.ok) {
        throw new Error('Change name request failed');
    }

    return response.json();
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