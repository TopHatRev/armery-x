require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./productModel");
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json()); // allows us access to the request.body

// connect to the databse (pretty important step)
mongoose.connect(process.env.DATABASE_URL);

// READ
app.get("/products", async (request, response) => {
  // try to do this code, but if it errors, instead of crashing the server, stop, and move to the catch
  try {
    const products = await Product.find(request.query); // e.g. { location: "Liverpool" }
    response.status(200).json(products);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// CREATE
app.post("/products", async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);
    response.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// DELETE e.g localhost:8080/cats/90869868728729
app.delete("/products/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    response.status(200).send(deletedProduct);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// UPDATE
app.put("/products/:id", async (request, response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(request.params.id, request.body);
    response.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
