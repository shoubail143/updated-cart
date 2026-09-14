import React, { useState, useOptimistic, useRef, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const formRef = useRef(null);

  // 1. The useOptimistic hook (now takes text AND time)
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo) => [
      ...currentTodos,
      {
        id: Date.now(),
        text: newTodo.text,
        time: newTodo.time,
        sending: true,
        notified: false, // Prevents it from ringing repeatedly
      },
    ],
  );

  // 2. Form Submission
  async function handleSubmit(formData) {
    const todoText = formData.get("todo");
    const todoTime = formData.get("time"); // Get the time from the form

    if (!todoText || todoText.trim() === "") return;

    // Optimistic update
    addOptimisticTodo({ text: todoText, time: todoTime });
    formRef.current.reset();

    // Simulate server request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Actual state update
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: todoText,
        time: todoTime,
        sending: false,
        notified: false,
      },
    ]);
  }

  // 3. The Voice Timer (Runs in the background)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      // Get current time in "HH:MM" format (e.g., "14:30")
      const currentTime = now.toTimeString().slice(0, 5);

      setTodos((prevTodos) => {
        let hasChanged = false;

        const updatedTodos = prevTodos.map((todo) => {
          // If the time matches AND we haven't already announced it...
          if (todo.time === currentTime && !todo.notified) {
            // 🗣️ TRIGGER THE VOICE
            const utterance = new SpeechSynthesisUtterance(
              `Reminder: ${todo.text}`,
            );
            utterance.rate = 1; // Speed of speech
            window.speechSynthesis.speak(utterance);

            hasChanged = true;
            return { ...todo, notified: true }; // Mark as announced
          }
          return todo;
        });

        return hasChanged ? updatedTodos : prevTodos;
      });
    }, 10000); // Checks every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "500px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>useOptimistic Hook</h1>

      {/* Form now has a time input! */}
      <form
        action={handleSubmit}
        ref={formRef}
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <input
          name="todo"
          type="text"
          placeholder="Enter todo..."
          style={{
            padding: "8px",
            fontSize: "16px",
            flex: 1,
            minWidth: "150px",
          }}
        />
        <input
          name="time"
          type="time"
          required // Makes sure they pick a time
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
        >
          Add Todo
        </button>
      </form>

      {/* Render the Optimistic Todos */}
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          fontSize: "18px",
        }}
      >
        {optimisticTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
              opacity: todo.sending ? 0.5 : 1,
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>🔔</span>
              <span>{todo.text}</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              <span>🕒 {todo.time}</span>
              {todo.sending && <span>(Saving...)</span>}
              {todo.notified && <span style={{ color: "green" }}>(Rang!)</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
