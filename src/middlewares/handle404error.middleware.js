const Colors = require('@colors/colors');
require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

const handle404Error = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      Colors.red(
        `*** Error *** <<< message:[Not Found] -- code:[404] -- [handle404Error] >>>`
      )
    );
  }

  res.status(404).send('<h1>Page not found on the server</h1>');
};

module.exports = handle404Error;
