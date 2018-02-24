var constant = require('./constant');
module.exports = function authentication(req, res, next) {
  if(req.headers.apikey === '') {
     next();
  } else {
    res.json(constant.INVALID_REQUEST);
  }
}
