const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();
const { connectDb } = require('./db/config');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

// Connect to database
connectDb();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
