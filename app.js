const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Colors = require('@colors/colors');
const routes = require('./src/routes');

const app = express();
const PORT = 3000;
const URL = 'http://localhost';

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

routes(app);

app.listen(PORT, () => {
    console.log(Colors.bgGreen.black(`==>> Server is running on ${URL}:${PORT} `));
});