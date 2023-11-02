const mongoose = require("mongoose");

const companieSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  companyLegalNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  incorporationCountry: {
    type: String,
    required: true,
    trim: true,
  },
  website: {
    type: String,
    required: true,
    trim: true,
  },

  
});

const Companies = mongoose.model("Companies", companieSchema);

module.exports = Companies;
