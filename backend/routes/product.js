const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/products", productController.listProducts);

router.post("/products", productController.createProduct);

router.put("/products:id", productController.updateProduct);

router.delete("/products:id", productController.deleteProduct);

module.exports = router;
