import Product from "../models/productModel.js";

// STOCK IN
export const stockIn = async (req, res) => {
  const { productId, amount } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.quantity += Number(amount);

    product.stockInHistory.push({ amount });

    await product.save();
    res.json({ message: "Stock added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// STOCK OUT
export const stockOut = async (req, res) => {
  const { productId, amount } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.quantity < amount) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    product.quantity -= Number(amount);

    product.stockOutHistory.push({ amount });

    await product.save();
    res.json({ message: "Stock removed", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// STOCK REPORT
export const stockReport = async (req, res) => {
  try {
    const products = await Product.find().select("name quantity price");

    res.json({
      message: "Stock Report",
      totalProducts: products.length,
      products
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
