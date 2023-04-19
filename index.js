const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const fs = require('fs');
require('./models');
const app = express();
const port = 8000;

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@my-ecommerce.nmdsza1.mongodb.net/ecom`).then(()=>console.log('Connection Successful'));

app.use(express.json());
app.use(cors('*'))


var allRoutes = require('path').join(__dirname, '/router/')
fs.readdirSync(allRoutes).forEach(function (file) {
  var routeFiles = require(allRoutes + '/' + file);
  app.use('/' + "admin", routeFiles)
})

app.get('/test', (req, res) => {
    return res.send("Hello")
})

app.listen(port, () => {
    console.log("Listening to port 8000")
})

module.exports = app;