const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  image_url: String,
  name: String,
  gauge: Number,
  century: String,
  country: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
