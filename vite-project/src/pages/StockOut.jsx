import { useState, useEffect } from "react";
import React from "react";
import API from "../api/axios";

export default function StockOut() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data));
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/stock/stock-out", {
      productId: selected,
      amount,
    });

    alert("Stock Out Successful");
  } catch (err) {
    console.error("STOCK OUT ERROR:", err.response?.data || err.message);
    alert("Error: " + (err.response?.data?.message || err.message));
  }
};

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Stock Out</h2>

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

        <button className="bg-red-600 text-white w-full py-2 rounded">
          Remove Stock
        </button>
      </form>
    </div>
  );
}
