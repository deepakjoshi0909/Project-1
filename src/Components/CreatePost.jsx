import React, { useState } from 'react';
import { FaTags, FaEdit } from 'react-icons/fa';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('Tech');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    console.log('Post Created:', { title, content, image, tags, category });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-6 flex items-center justify-center">
      <form onSubmit={handleCreatePost} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl transform transition duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Create Your Post
        </h2>

        {/* Post Title */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <FaEdit className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
        </div>

        {/* Post Content */}
        <div className="relative mb-6">
          <textarea
            placeholder="Write your post content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            className="block w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          />
        </div>

        {/* Post Tags */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Add tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="block w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <FaTags className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
        </div>

        {/* Category Selector */}
        <div className="relative mb-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          >
            <option value="Tech">Tech</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {image && (
            <div className="relative w-full h-64 mb-4 flex justify-center">
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg shadow-md transform transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-l transform transition duration-300 ease-in-out hover:scale-105"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
