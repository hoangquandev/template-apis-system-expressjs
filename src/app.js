const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

const app = express()

dotenv.config();

//Middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

//Connect DB
require('./dbs/mongodb')
// const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

//Routes
app.use('', require('./routes'))

//Handling error

module.exports = app