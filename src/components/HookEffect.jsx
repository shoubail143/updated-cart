import React, { useState, useEffect, useLayoutEffect } from "react";

export const HookEffect = () => {
  const [posts, setPosts] = useState([]);
  const [layoutValue, setLayoutValue] = useState("Initial");

  useLayoutEffect(() => {
    console.log("useLayoutEffect called");
    setLayoutValue("Updated");
  }, []);

  useEffect(() => {
    console.log("useEffect called");

    // HARD CODEDDD..
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
        body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
      },
      {
        userId: 4,
        id: 32,
        title: "doloremque illum aliquid sunt",
        body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
      },
      {
        userId: 4,
        id: 33,
        title: "qui explicabo molestiae dolorem",
        body: "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
      },
    ];

    setPosts(mockData);

    return () => {
      console.log("UnMounted");
    };
  }, []);

  return (
    <div>
      <h2>Posts!</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
