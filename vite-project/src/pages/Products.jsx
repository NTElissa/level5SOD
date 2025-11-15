import { useEffect, useState } from "react";
import React from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";
import "tailwindcss";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    if (!confirm("Delete this product?")) return;
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {products.map((p) => (
          <div key={p._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-gray-600">Price: ${p.price}</p>
            <p className="text-sm text-gray-500 mb-3">{p.description}</p>
            <div className="flex gap-2">
              <Link to={`/edit/${p._id}`} className="bg-yellow-400 px-3 py-1 rounded">Edit</Link>
              <button onClick={() => deleteProduct(p._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
