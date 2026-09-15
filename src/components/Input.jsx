import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Propdrill } from "./Propdrill";

const Input = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        style={{ width: "300px", height: "30px", padding: "5px" }}
        type="text"
        placeholder="Enter Anything"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />

      <p>{value}</p>

      <Propdrill state={value} />
    </div>
  );
};

export default Input;
