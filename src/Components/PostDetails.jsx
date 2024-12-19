import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThumbUpIcon } from '@heroicons/react/solid'; // Import the like icon from Heroicons
import fitnessImage from '../Data/fitness.jpg';
import education from '../Data/education.jpg';

const posts = [
  {
    id: 1,
    title: 'Post Title 1',
    image: fitnessImage,
    summary: 'This is a summary of the post content.',
    content: `
      This is the detailed content of post 1. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus aliquet elit ac nisl. Suspendisse varius enim in eros elementum tristique.
      ## Key Highlights
      - Discusses cutting-edge trends in technology.
      - Practical advice for tech enthusiasts.
      - Tips to boost productivity with gadgets.
    `,
    author: 'John Doe',
    category: 'Technology',
    tags: ['AI', 'Innovation', 'Programming'],
    publishedDate: 'December 15, 2024',
    readingTime: '5 min',
  },
  {
    id: 2,
    title: 'Post Title 2',
    image: education,
    summary: 'This is a summary of the post content.',
    content: `
      This is the detailed content of post 2. 
      Aenean commodo ligula eget dolor. Etiam ultricies nisi vel augue.
      ## Key Takeaways
      - Importance of a healthy lifestyle.
      - Managing stress through mindful activities.
      - Fitness routines for busy schedules.
    `,
    author: 'Jane Smith',
    category: 'Health',
    tags: ['Wellness', 'Nutrition', 'Fitness'],
    publishedDate: 'December 10, 2024',
    readingTime: '4 min',
  },
  {
    id: 3,
    title: 'Post Title 3',
    image: 'https://via.placeholder.com/600x300',
    summary: 'This is a summary of the post content.',
    content: `
      This is the detailed content of post 3. 
      Etiam gravida velit vitae enim gravida, sit amet lacinia velit vulputate.
      ## What You'll Learn
      - Balancing work and personal life.
      - Importance of setting achievable goals.
      - Tips to lead a fulfilling lifestyle.
    `,
    author: 'Alice Johnson',
    category: 'Lifestyle',
    tags: ['Happiness', 'Work-Life', 'Motivation'],
    publishedDate: 'November 25, 2024',
    readingTime: '6 min',
  },
];

const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(postId));
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [likes, setLikes] = useState(0);

  if (!post) {
    return <div className="text-center text-xl text-red-600">Post not found</div>;
  }

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const relatedPosts = posts.filter((p) => p.category === post.category && p.id !== post.id);

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
            <span>Author: {post.author}</span> | <span>Category: {post.category}</span>
          </div>

          {/* Tags */}
          <div className="flex items-center space-x-3 mb-6">
            <h4 className="font-semibold">Tags:</h4>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
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

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-gray-200 p-4 rounded-lg shadow cursor-pointer hover:bg-gray-300 transition"
                    onClick={() => navigate(`/post/${relatedPost.id}`)}
                  >
                    <h4 className="font-bold text-lg">{relatedPost.title}</h4>
                    <p className="text-sm text-gray-600">{relatedPost.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                  {comment}
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
