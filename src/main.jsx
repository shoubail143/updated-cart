import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
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
=======
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./theme-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
>>>>>>> 9dab25fb0d1547fe049082a4c74741d86a7f37d5
  </StrictMode>,
);
