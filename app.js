const env = require('dotenv');
env.config();

const cors = require('cors');

const express = require('express');

const connectToDb = require('./config/dbconfig.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors())

connectToDb();

const userRoutes = require('./routes/userRoutes.js')

app.use('/', userRoutes)

module.exports = app;