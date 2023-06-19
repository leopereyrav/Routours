const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});
const Colors = require('@colors/colors');
const routes = require('./src/routes');

const app = express();
const APP_NAME = process.env.APP_NAME || 'Routours';
const PORT = process.env.APP_PORT || 3000;
const URL = process.env.APP_URL || 'http://localhost';

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

routes(app);

app.listen(PORT, () => {
  console.log(
    Colors.bgGreen.black(
      `==>> ${APP_NAME} Server is running on ${URL}:${PORT} `
    )
  );
});
