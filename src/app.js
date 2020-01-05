'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');
const cors = require('cors');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

const index = require('./routes/index');
const planet = require('./routes/planet');

const corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/planets', planet);

module.exports = app;

