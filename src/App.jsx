import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
