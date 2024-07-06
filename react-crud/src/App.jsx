import React, { useState, useEffect } from 'react';
import { getPosts, createPost, deletePost } from './services/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    const createdPost = await createPost(newPost);
    setPosts([...posts, createdPost]);
    setNewPost({ title: '', content: '' });
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Create New Post</h2>
        <input
          type="text"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          placeholder="Content"
        ></textarea>
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
    </div>
  );
}

export default App;
