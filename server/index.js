const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db');

const app = express();

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});