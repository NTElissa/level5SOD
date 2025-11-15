import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import "tailwindcss";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/users/login", form);

      // Save token to localStorage
      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard (Products page)
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 rounded text-white ${loading ? "bg-gray-400" : "bg-blue-600"}`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link to="/signup">
          <p className="mt-4 text-blue-600 text-center hover:underline">Create account</p>
        </Link>
      </form>
    </div>
  );
}
