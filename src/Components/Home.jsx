import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]); // Store posts
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  // Fetch posts from the backend API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/");
        setPosts(response.data); // Set posts data to state
      } catch (err) {
        setError("Error fetching posts"); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };
    fetchPosts(); // Call the function to fetch posts
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg mb-6">
          Discover insights, stories, and trends from our community of writers.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
          Explore Posts
        </button>
      </div>

      {/* Featured Posts Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Featured Posts
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Explore our latest updates, insights, and stories.
        </p>
        {loading && <p className="text-center text-white">Loading posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {posts.length === 0 && !loading && !error && (
          <p className="text-center text-white">No posts available</p>
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {!loading && !error && posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={post.image || "https://via.placeholder.com/400"} // Use a placeholder if no image is available
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                <Link
                  to={`/posts/${post._id}`} // Assuming the post has an _id for routing
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10">
            Explore Categories
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Dive into diverse topics and discover content tailored to your
            interests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[/* Same category content as before */].map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl px-6 py-8 text-center transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => alert(`${category.name} category clicked!`)}
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6">
          Stay updated with our latest posts and trends.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg text-gray-800"
          />
          <button className="bg-yellow-400 px-6 py-3 rounded-r-lg text-black hover:bg-yellow-500">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
