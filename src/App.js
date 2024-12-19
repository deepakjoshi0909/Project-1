import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import Login from './Components/Login';
import Register from './Components/Resister';
import ProtectedRoute from './Components/ProtectedRoute';
import PostDetails from './Components/PostDetails';
import AuthorsPage from './Components/AuthorsPage';
import AboutPage from './Components/About';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
