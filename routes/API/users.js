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

// PUT /api/users/change name
router.put('/changeName', ensureLoggedIn, usersCtrl.changeName);

// PUT /api/users/change password
router.put('/changePassword', ensureLoggedIn, usersCtrl.changePassword);

// DELETE /api/user/:id - delete user
router.delete('/:id', ensureLoggedIn, usersCtrl.deleteAccount);



module.exports = router;