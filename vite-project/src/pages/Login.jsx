import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import "tailwindcss";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input className="border p-2 w-full mb-3" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input className="border p-2 w-full mb-4" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button className="bg-blue-600 w-full text-white p-2 rounded">Login</button>
        <Link to="/signup">
  <p className="mt-4 text-blue-600 text-center hover:underline">Create account</p>
</Link>

      </form>
      
    </div>
  );
}
