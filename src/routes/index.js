const tours = require('./tour.routes');
const users = require('./user.routes');
const handle404Error = require('../middlewares/handle404error.middleware');

const routes = (app) => {
  app.use('/api/v1/tours', tours);
  app.use('/api/v1/users', users);

  app.use(handle404Error);
};

module.exports = routes;
