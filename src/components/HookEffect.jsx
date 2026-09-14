import React, { useState, useEffect, useLayoutEffect } from "react";

const HookEffect = () => {
  const [posts, setPosts] = useState([]);
  const [layoutValue, setLayoutValue] = useState("Initial");
  // 1. The "light switch" state. False means hidden.
  const [showPosts, setShowPosts] = useState(false);

  useLayoutEffect(() => {
    console.log("useLayoutEffect called");
    setLayoutValue("Updated by Layout Effect");
  }, []);

  useEffect(() => {
    console.log("useEffect called");

    // Your hardcoded mock data
    const mockData = [
      {
        userId: 1,
        id: 1,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to yell unless it was absolutely necessary.",
      },
      {
        userId: 1,
        id: 2,
        title: "He was an expert but not in a discipline",
        body: "He was an expert but not in a discipline that anyone could easily identify.",
      },
      {
        userId: 2,
        id: 3,
        title: "He was a nerd, but a cool nerd",
        body: "He was a nerd, but a cool nerd, or at least he thought he was.",
      },
      {
        userId: 4,
        id: 31,
        title: "ullam ut quidem id aut vel consequuntur",
        body: "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae",
      },
      {
        userId: 4,
        id: 32,
        title: "doloremque illum aliquid sunt",
        body: "deserunt eos nobis asperiores et hic nostrum debitis repellat molestiae optio nihil ratione ut eos beatae quibusdam distinctio maiores",
      },
      {
        userId: 4,
        id: 33,
        title: "qui explicabo molestiae dolorem",
        body: "rerum ut et numquam laborum odit est sit id qui sint in quasi tenetur tempore aperiam et quaerat qui in rerum officiis sequi cumque quod",
      },
    ];

    setPosts(mockData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hook Effect</h2>

      {/* Shows that useLayoutEffect is working */}
      <p style={{ color: "#888", fontSize: "14px" }}>
        Layout Effect Status: <strong>{layoutValue}</strong>
      </p>

      {/* 2. The toggle button */}
      <button
        onClick={() => setShowPosts(!showPosts)}
        style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer" }}
      >
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      {/* 3. Conditional Rendering: Only show this if showPosts is true */}
      {showPosts && (
        <div>
          <h3>Posts!</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {posts.map((post) => (
              <li key={post.id} style={{ marginBottom: "15px" }}>
                <strong>{post.title}</strong>
                <p style={{ margin: "5px 0 0 0", color: "#ccc" }}>
                  {post.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HookEffect;
