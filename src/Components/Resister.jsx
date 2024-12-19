import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold error messages
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation check
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError(''); // Clear the error if the fields are valid
    login({ email });  // Register and then log in
    navigate('/'); // Redirect after registration
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-700 flex items-center justify-center">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Create an Account</h2>
        
        {/* Display error message if any */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          />
        </div>
        
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
