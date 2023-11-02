const mongoose = require("mongoose");
require("dotenv").config();
const CONNECTION_URI = process.env.URI;
const seedInitialData = require("./InitialData/companies");
const seedInitialDatas = require("./InitialData/products");

const database =  () => {
  
   mongoose.connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(()=>{
      seedInitialData();
      seedInitialDatas();
      console.log("MongoDB connected.");
    }).catch ((err) => {
      console.log(err)
    })
};


module.exports = database;
