import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
