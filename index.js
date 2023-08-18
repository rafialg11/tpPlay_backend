require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error)
}) 

db.once('connected', () => {
    console.log('Connected to database');
})

const app = express()
app.use(cors({
    origin: 'https://tpplaybackend-production.up.railway.app/api' // Ganti dengan domain yang diizinkan
}));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
//call routes
require('./routes/videoRoute')(app)
require('./routes/commentRoute')(app)
require('./routes/productRoute')(app)


app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})