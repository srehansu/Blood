// BlogPage.js
import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-post">
        <h2>Post Title</h2>
        <p>Post content goes here...</p>
      </div>
      <div className="blog-post">
        <h2>Post Title</h2>
        <p>Post content goes here...</p>
      </div>
      {/* Add more blog posts here */}
    </div>
  );
};

export default BlogPage;
