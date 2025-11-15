import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  quantity: { type: Number, default: 0 },

  stockInHistory: [
    {
      amount: Number,
      date: { type: Date, default: Date.now }
    }
  ],

  stockOutHistory: [
    {
      amount: Number,
      date: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.model("Product", productSchema);
