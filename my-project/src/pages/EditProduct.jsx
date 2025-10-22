import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";
import "tailwindcss";

export default function EditProduct() {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const res = await API.get(`/products/${id}`);
    setForm(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/products/${id}`, form);
    navigate("/");
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Product</h2>
        <input className="border p-2 w-full mb-3" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
        <input className="border p-2 w-full mb-3" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}/>
        <textarea className="border p-2 w-full mb-4" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
        <button className="bg-blue-600 w-full text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
}
