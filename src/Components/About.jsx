import React from "react";
import Aboutimage from "../Data/about-image.jpg";
import team1 from "../Data/team1.jpg";
import team2 from "../Data/team2.jpg";
import team3 from "../Data/team3.jpg";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 mt-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Aboutimage})`,
            backgroundSize: "cover", // Ensure the image covers the entire background
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent repetition
            opacity: 0.7, // Adjust visibility for image text readability
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn text-yellow-400 neon-effect">
              About Us
            </h1>
            <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s text-white font-bold neon-effect">
              We are a passionate community of writers sharing stories,
              insights, and experiences.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          What We Do
        </h2>
        <p className="text-xl text-gray-600 text-center mb-10">
          Our blog is a place where we share informative, engaging, and
          thought-provoking articles. We aim to inspire and connect readers
          through captivating stories and experiences.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              We are committed to bringing the best content to our audience. Our
              goal is to provide high-quality posts that resonate with readers
              from various backgrounds.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              Our vision is to create a community where everyone feels empowered
              to express their thoughts and ideas. We strive to offer insightful
              and thought-provoking content that adds value to the lives of our
              readers.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={team1}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & Chief Writer</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={team2}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Content Strategist</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={team3}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Alice Johnson
              </h3>
              <p className="text-gray-600">Editor & Blogger</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className="text-xl mb-8">
          Stay connected with us to get the latest updates, articles, and more.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
