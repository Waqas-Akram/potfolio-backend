const express = require("express");
const colors = require("colors");
const connectDB = require("./db");
const projects = require("./routes/api/projects");
const contact = require("./routes/api/contact");
require('dotenv').config()

const path = require('path');

const app = express();

app.use(express.json({ extended: true }));

//DataBase Connection Execution Server

connectDB();

//Get Routes APi

app.use("/api/projects", projects);
app.use("/api/contact", contact);

//Main Route Rendering

app.get('/',(req, res) => {
    res.send('APi is running')
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`.yellow.bold);
});
