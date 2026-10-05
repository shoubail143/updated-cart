import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Course from "./components/Course";
import Jaasondata from "./components/Jaasondata";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Jaasondata" element={<Jaasondata />} />
      </Routes>
    </>
  );
}

export default App;
