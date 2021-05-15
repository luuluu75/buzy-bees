const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));   