<<<<<<< HEAD
import { useRef, useState } from "react";
import Input from "./components/Input.jsx";
import { HookEffect } from "./components/HookEffect.jsx";
import "./App.css";
import { Darktheme } from "./components/Darktheme.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [Toggle, setToggle] = useState(false);

  return (
    <>
      <Darktheme />
      <h4>You have clicked {count} times</h4>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <br />
      <button onClick={() => setCount(count - 1)}>DEC</button>

      <br />
      <Input />
      <br />

      <br />
      <br />
      {Toggle && <HookEffect />}
      <button onClick={() => setToggle(!Toggle)}>Toggle HookEffect</button>
    </>
=======
import React, { useState } from "react";
import Card from "./components/card.jsx";
import keyboard from "./assets/keyboard.jpg";
import earbuds from "./assets/earbuds.jpg";
import rgbmouse from "./assets/rgbmouse.jpg";

const products = [
  { id: 1, title: "Mechanical Keyboard", value: "$29.99", img: keyboard },
  { id: 2, title: "Wireless Earbuds", value: "$34.99", img: earbuds },
  { id: 3, title: "RGB Gaming Mouse", value: "$19.99", img: rgbmouse },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => {
    // Remove '$' and convert to number
    const price = parseFloat(item.value.replace("$", ""));
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Header with cart counter */}
      <div className="flex justify-between w-full max-w-4xl px-4 mb-8">
        <h1 className="font-bold text-3xl">Welcome To My Cart</h1>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-full">
          🛒 Cart: {cart.length}
        </div>
      </div>

      {/* Product cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            value={product.value}
            img={product.img}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* Cart items list with total */}
      <div className="mt-12 w-full max-w-4xl px-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            <ul className="bg-white rounded-lg shadow p-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  <span>{item.title}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            {/* Total price */}
            <div className="mt-4 text-right font-bold text-xl">
              Total: ${total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
>>>>>>> e525afa8c1613a5d4b93d83a2a5d3099b5201d73
  );
}

export default App;
