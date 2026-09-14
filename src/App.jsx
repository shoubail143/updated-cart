import React from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import Checkbox from "./components/Checkbox";
import { Darktheme } from "./components/Darktheme";
import HookEffect from "./components/HookEffect";
import Input from "./components/Input";
import Inputimp from "./components/Inputimp";
import { Propdrill } from "./components/Propdrill.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <div
      className="App"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        🧸 React Hooks Playground
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Dark Theme</h2>
          <Darktheme />
        </section>

        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Todo List Practice</h2>
          <Todo />
        </section>

        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Input & InputImp</h2>
          <Input />
          <br />
          <Inputimp />
        </section>

        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Checkbox</h2>
          <Checkbox />
        </section>

        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Cart</h2>
          <Cart />
        </section>

        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Propdrill />
        </section>

        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Hook Effect</h2>
          <HookEffect />
        </section>
      </div>
    </div>
  );
}

export default App;
