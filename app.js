const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://localhost/contactform";

const app = express();

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open',() => {
    console.log("connected...")
})

app.use(express.json());

const contactRouter = require("./routes/contact");
app.use('/contact',contactRouter);

app.listen(9000,() => {
    console.log("SERVER STARTED...")
})