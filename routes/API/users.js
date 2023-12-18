const express = require('express')
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require auth  middleware function - ensures the request is coming from a logged in user
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/users/checkToken - check login button
// insert ensureLoggedIn to protect check token functionality
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// POST /api/users - login
router.post('/login', usersCtrl.login);

// POST /user/create user - signup
router.post('/', usersCtrl.create);

// PUT /api/users/change-name - change name
router.put('/change-name', ensureLoggedIn, usersCtrl.changeName);


module.exports = router;