require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);


const personRoutes = require('./routes/personRoutes');

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());

app.use('/person', personRoutes);


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.iqrtfzp.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectamos ao mongoDB");
    app.listen(3001);
})
.catch((err) => {
    console.log(err);
})

