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
  );
}

export default App;
