const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();
const { connectDb } = require('./db/config');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// Import routes

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

// Routes

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);

const port = process.env.PORT || 8000;

// Connect to database
connectDb();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
