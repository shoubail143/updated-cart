<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Card from "./Card";
=======
import React from "react";
import { useState, useEffect } from "react";
>>>>>>> e44c1ddb99992056e6e2ff619eb304b1cd021b42

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
<<<<<<< HEAD
    <>
      <Navbar />
      <Hero />
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bold text-center text-3xl mb-8">Latest Blogs</h2>
          <div className="grid grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} title={post.title} body={post.body} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
=======
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </div>
      ))}
    </div>
>>>>>>> e44c1ddb99992056e6e2ff619eb304b1cd021b42
  );
};

export default Home;
