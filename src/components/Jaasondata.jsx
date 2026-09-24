import React from "react";
import { useState } from "react";

const Jaasondata = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

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

export default Jaasondata;
