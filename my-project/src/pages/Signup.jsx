import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import "tailwindcss";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/signup", form);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input className="border p-2 w-full mb-3" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })}/>
        <input className="border p-2 w-full mb-3" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input className="border p-2 w-full mb-4" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button className="bg-blue-600 w-full text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
}
