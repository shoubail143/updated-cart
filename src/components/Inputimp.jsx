import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";

const Inputimp = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null); // ✅ No square brackets here!

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type Please.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
});

export default Inputimp;
