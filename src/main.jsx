import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import { BrowserRouter } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
import "./index.css";
>>>>>>> e44c1ddb99992056e6e2ff619eb304b1cd021b42
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
