import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThumbUpIcon } from '@heroicons/react/solid';

const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch post details
    axios
      .get(`http://localhost:5000/api/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
        setLikes(response.data.likes || 0); // Handle missing likes field
        setLoading(false);
      })
      .catch(() => {
        setError('There was an error fetching the post!');
        setLoading(false);
      });

    // Fetch comments
    axios
      .get(`http://localhost:5000/api/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [postId]);

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      axios
        .post(`http://localhost:5000/api/posts/${postId}/comments`, { text: commentText })
        .then((response) => {
          setComments([...comments, response.data]); // Add new comment to state
          setCommentText('');
        })
        .catch((error) => console.error('Error submitting comment:', error));
    }
  };

  const handleLike = () => {
    setLikes(likes + 1); // Optimistic update
    axios
      .post(`http://localhost:5000/api/posts/${postId}/like`)
      .catch((error) => console.error('Error updating likes:', error));
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-600">{error}</div>;
  }

  if (!post) {
    return <div className="text-center text-xl text-red-600">Post not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg mb-2">{post.summary}</p>
        <p className="text-sm italic mb-4">
          Published on {post.publishedDate} | {post.readingTime} read
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition"
        >
          Back to Posts
        </button>
      </div>

      {/* Post Content Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
          />
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-6">
            {post.content}
          </p>

          {/* Metadata Section */}
          <div className="text-sm text-gray-500 mb-6">
          <span>Author: {post.author?.name || 'Unknown'}</span>
          | <span>Category: {post.category}</span>
          </div>

          {/* Tags */}
          <div className="flex items-center space-x-3 mb-6">
            <h4 className="font-semibold">Tags:</h4>
            {Array.isArray(post.tags) && post.tags.length > 0 ? (
              post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span>No tags available</span>
            )}
          </div>

          {/* Like Button */}
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={handleLike}
              className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-yellow-500"
            >
              <ThumbUpIcon className="h-5 w-5 text-black" />
              <span>Like {likes}</span>
            </button>
          </div>

          {/* Comment Section */}
          <div className="border-t pt-4 mt-8">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>
            <div className="mb-4">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleCommentSubmit}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
            <ul className="space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="bg-gray-200 p-3 rounded-lg">
                  {comment.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;