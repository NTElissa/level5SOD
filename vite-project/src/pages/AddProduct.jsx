import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import "tailwindcss";


export default function AddProduct() {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/products", form);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
        <input className="border p-2 w-full mb-3" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })}/>
        <input className="border p-2 w-full mb-3" type="number" placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })}/>
        <textarea className="border p-2 w-full mb-4" placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
        <button className="bg-blue-600 w-full text-white p-2 rounded">Add</button>
      </form>
    </div>
  );
}
