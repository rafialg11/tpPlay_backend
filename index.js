require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error)
}) 

db.once('connected', () => {
    console.log('Connected to database');
})

//const routes = require('./routes/routes');
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
})