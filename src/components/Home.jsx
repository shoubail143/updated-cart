import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getposts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json(posts);
        setPosts(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getposts();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
