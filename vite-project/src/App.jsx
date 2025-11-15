import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import StockIn from "./pages/StockIn";
import StockOut from "./pages/StockOut";
import StockReport from "./pages/StockReport";

function App() {
  const isAuth = !!localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={isAuth ? <Products /> : <Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/add" element={isAuth ? <AddProduct /> : <Navigate to="/login" />} />
        <Route path="/edit/:id" element={isAuth ? <EditProduct /> : <Navigate to="/login" />} />

        <Route path="/stock-in" element={isAuth ? <StockIn /> : <Navigate to="/login" />} />
        <Route path="/stock-out" element={isAuth ? <StockOut /> : <Navigate to="/login" />} />
        <Route path="/stock-report" element={isAuth ? <StockReport /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
