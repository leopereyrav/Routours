const handle404Error = require('./handle404error.middleware');

const middlewares = {
  handle404Error: handle404Error,
};

module.exports = middlewares;
