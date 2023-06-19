const Colors = require('@colors/colors');
require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

const handleHttpError = (
  res,
  msg = 'An Error Ocurred',
  code = 500,
  nameFunction = 'null',
  error = 'Internal Error'
) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      Colors.red(
        `*** Error *** <<< message:[${msg}] -- code:[${code}] -- [${nameFunction}] -- Error Data:[${error}] >>>`
      )
    );
  }

  res.status(code).json({
    success: false,
    error: msg,
    errorData: error,
  });
};

module.exports = {
  handleHttpError,
};
