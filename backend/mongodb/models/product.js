
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  productCategory: {
    type: String,
    required: true,
    trim: true,
  },
  productAmount: {
    type: Number,
    required: true,
    trim: true,
  },
  amountUnit: {
    type: String,
    required: true,
    trim: true,
  },

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
