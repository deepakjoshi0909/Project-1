import React from 'react';
import team1 from '../Data/team1.jpg'
import team2 from '../Data/team2.jpg'
import team3 from '../Data/team3.jpg'
import team4 from '../Data/team4.jpg'
import meetTeam from '../Data/meet-team.png'

const authors = [
  {
    id: 1,
    name: 'John Doe',
    bio: 'Tech enthusiast and a software development writer.',
    image: team1 ,
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    bio: 'Lifestyle blogger and mindfulness expert.',
    image: team2,
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'Alice Johnson',
    bio: 'Traveler and cultural storyteller.',
    image: team3,
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Bob Williams',
    bio: 'Food critic and culinary reviewer.',
    image: team4,
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

const AuthorsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20">
  {/* Background Image with Opacity Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{ backgroundImage: `url(${meetTeam})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  ></div>

  {/* Content Section with Centered Text */}
  <div className="container mx-auto text-center relative z-10 px-4">
    {/* Heading with Animation */}
    <h1 className="text-5xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">
      Meet Our Talented Authors
    </h1>

    {/* Subheading with Animation */}
    <p className="text-xl text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
      Explore their unique voices and perspectives.
    </p>

    {/* Discover More Button */}
    <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transform transition-all duration-300 shadow-lg hover:scale-105">
      Discover More
    </button>
  </div>
</div>


      {/* Authors Section */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10 animate__animated animate__fadeIn">Our Featured Authors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div key={author.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{author.name}</h3>
                <p className="text-gray-600 mt-3">{author.bio}</p>
                <div className="flex gap-4 mt-6">
                  <a
                    href={author.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Twitter
                  </a>
                  <a
                    href={author.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 mt-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate__animated animate__fadeIn">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">Stay updated with the latest posts and news.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg text-gray-800"
            />
            <button className="bg-yellow-400 px-6 py-3 rounded-r-lg text-black hover:bg-yellow-500">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthorsPage;
