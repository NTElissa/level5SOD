import { useState, useEffect } from "react";
import React from "react";
import API from "../api/axios";

export default function StockReport() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/stock/stock-report").then(res => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Stock Report</h2>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">${p.price}</td>
              <td className="p-2 border">{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
