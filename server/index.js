const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db');
const app = express();
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {
    origin: "http://localhost:3000"
}
app.use(cors(corsOptions));

const env = require('dotenv').config({path: '../.env'});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const productRouter = require('./routes/productRouter');



app.use('/api/', productRouter);



app.get("/", (req, res) => {
    res.json({ message: "Welcome to MyCafe"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});