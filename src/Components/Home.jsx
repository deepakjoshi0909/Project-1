import React from "react";
import { Link } from "react-router-dom";
import fitness from '../Data/fitness.jpg';
import market from '../Data/market.png';
import tech from '../Data/tech.jpg';
import food from '../Data/food.png';
import education from '../Data/education.jpg';
import travel from '../Data/travel.jpg';

const HomePage = () => {
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
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: fitness,
              title: "Embracing the Digital Revolution",
              description:
                "Understand how technology is transforming industries and redefining boundaries.",
              link: "/post/1",
            },
            {
              image: education,
              title: "The Call of the Wild",
              description:
                "Experience the thrill of untamed nature and its breathtaking beauty.",
              link: "/post/2",
            },
            {
              image: food,
              title: "Innovations that Inspire",
              description:
                "Discover groundbreaking innovations shaping the future of humanity.",
              link: "/post/3",
            },
            {
              image: travel,
              title: "Beyond the Stars",
              description:
                "Dive into the mysteries of the cosmos and the future of space exploration.",
              link: "/post/4",
            },
            {
              image: market,
              title: "The Art of Creativity",
              description:
                "Explore the limitless potential of human imagination and creativity.",
              link: "/post/5",
            },
            {
              image: tech,
              title: "The Rise of AI and Robotics",
              description:
                "Unravel the latest advancements in artificial intelligence and robotics.",
              link: "/post/6",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link
                  to={post.link}
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
            {[
              {
                name: "Tech",
                icon: "💻",
                description: "Latest trends in technology",
              },
              {
                name: "Lifestyle",
                icon: "🏡",
                description: "Tips for better living",
              },
              {
                name: "Travel",
                icon: "✈️",
                description: "Adventures around the globe",
              },
              {
                name: "Food",
                icon: "🍔",
                description: "Delicious recipes & more",
              },
              {
                name: "Education",
                icon: "📚",
                description: "Knowledge and resources",
              },
              {
                name: "Fitness",
                icon: "🏋️‍♂️",
                description: "Achieve your health goals",
              },
            ].map((category, index) => (
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
