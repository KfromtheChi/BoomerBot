// checkToken middleware
// require the dependency
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // check for the token being sent in a header or as a query parameter
    let token = req.get('Authorization') || req.query.token;
    // if token exists
    if (token) {
        // Replace 'Bearer' with empty string
        token = token.replace('Bearer ', '');
        // Call for verify from jwt - pass token and pass secret, use callback function
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
        // If valid token, decoded will be the token's entire payload
        // If invalid token, err will be set
        req.user = err ? null : decoded.user;  
        // req expiration - if error it will be null otherwise set to expiration within decoded date
        req.exp = err ? null : new Date(decoded.exp * 1000);  
        return next();
    });
  } else {
    // No token sent
    req.user = null;
    return next();
  }
};