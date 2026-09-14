import React, { useState, useDeferredValue, useEffect } from "react";

function ExpensiveCalculationDemo() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  // 1. Defer the value. (Note: it's lowercase 'deferredInput' - don't name it 'useDeferredValue')
  const deferredInput = useDeferredValue(input);

  // 2. Check if the UI is currently out of sync (stale)
  const isStale = deferredInput !== input;

  // 3. Only run the expensive calculation when the deferred value changes
  useEffect(() => {
    const calculated = runExpensiveCalculation(deferredInput);
    setResults(calculated);
  }, [deferredInput]);

  const runExpensiveCalculation = (value) => {
    const calculatedResults = [];
    for (let i = 0; i < 10000; i++) {
      const result = i * parseInt(value || "0", 10);
      if (i % 1000 === 0) {
        calculatedResults.push(result);
      }
    }
    return calculatedResults;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Expensive Calculation Demo</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "8px", marginRight: "10px" }}
      />

      {/* Show a loading state if the input is ahead of the calculation */}
      {isStale && <p style={{ color: "orange" }}>Updating list...</p>}

      <div style={{ marginTop: "20px", opacity: isStale ? 0.5 : 1 }}>
        <h3>Results (Count: {results.length})</h3>
        <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpensiveCalculationDemo;
