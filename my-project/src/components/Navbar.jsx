import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">ProductApp</h1>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/" className="text-gray-700 hover:text-blue-600">Products</Link>
            <Link to="/add" className="text-gray-700 hover:text-blue-600">Add Product</Link>
            <button onClick={logout} className="bg-blue-600 text-white px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
