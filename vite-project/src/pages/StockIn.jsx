import { useState, useEffect } from "react";
import React from "react";
import API from "../api/axios";

export default function StockIn() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/stock/stock-in", { productId: selected, amount });
    alert("Stock In Successful");
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Stock In</h2>

        <select className="border p-2 w-full mb-3"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option>Select Product</option>
          {products.map(p => (
            <option key={p._id} value={p._id}>{p.name}</option>
          ))}
        </select>

        <input className="border p-2 w-full mb-3"
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Add Stock
        </button>
      </form>
    </div>
  );
}
