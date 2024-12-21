import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import leftImage from "../Data/login.jpg";

const Login = () => {
  const { login } = useContext(AuthContext); // Using login from AuthContext to set user session
  const [email, setEmail] = useState(""); // Local state for email
  const [password, setPassword] = useState(""); // Local state for password
  const [error, setError] = useState(""); // Local state for error messages
  const navigate = useNavigate(); // Hook to navigate after successful login

  // handleLogin function to manage login process
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    // Validate if fields are empty
    if (!email || !password) {
      setError("Please fill in all fields.");
      return; // Return early if validation fails
    }
    setError(""); // Reset error state if validation passes

    try {
      // API call to backend for login with email and password
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // If successful, store token in localStorage
      localStorage.setItem("token", response.data.token);
console.log(localStorage.getItem("token")); // Corrected key
// Should print the JWT token


      // Call the login function from AuthContext and navigate to the home page
      login({ email });
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      // Handle errors if login fails (wrong credentials, server issues, etc.)
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-lg overflow-hidden shadow-xl bg-white">
        {/* Left Side: Image with Overlay */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${leftImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8 mt-5">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg text-indigo-500">
              Welcome Back!
            </h1>
            <p className="text-lg text-gray-300">
              Access your account to explore new opportunities and insights.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email Address"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition shadow-md"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition shadow-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition shadow-lg"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
