import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import { Ourprod } from "./components/Pages/Ourprod";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Ourprod" element={<Ourprod />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
