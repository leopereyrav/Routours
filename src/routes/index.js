const tours = require('./tour.routes');

const routes = (app) => {
    app.use('/api/v1/tours', tours);
}

module.exports = routes;