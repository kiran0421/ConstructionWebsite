import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("auth", "true");

      // Redirect to the page the user was trying to access or default to home page
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    } else {
      alert("Please provide email and password.");
    }
    localStorage.setItem("auth", true);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email or Phone Number</label>
            <input
              type="text"
              className="w-full p-2 mt-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-blue-500">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
