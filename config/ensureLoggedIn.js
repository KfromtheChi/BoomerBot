// ensures the request is coming from a logged in user - middleware to protect server-side routes
// request object, response object, next callback
module.exports = function (req, res, next) {
  // If there is no user - Status code of 401 for Unauthorized
  if (!req.user) return res.status(401).json('Unauthorized');
  // call next
  next();
};