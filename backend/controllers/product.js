const Product = require("../mongodb/models/product");


const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Ürünleri listelerken bir hata oluştu" });
  }
};


const createProduct = async (req, res) => {
  const { productName, productCategory, productAmount, amountUnit, companyId } =
    req.body;

  const product = new Product({
    productName,
    productCategory,
    productAmount,
    amountUnit,
    companyId,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: "Ürün oluşturulurken bir hata oluştu" });
  }
};


const updateProduct = async (req, res) => {
  const { productName, productCategory, productAmount, amountUnit, companyId } =
    req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      productName,
      productCategory,
      productAmount,
      amountUnit,
      companyId,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: "Ürün güncellenirken bir hata oluştu" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ message: "Ürün başarıyla silindi" });
  } catch (error) {
    res.status(500).json({ error: "Ürün silinirken bir hata oluştu" });
  }
};

module.exports = {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
