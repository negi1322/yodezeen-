import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
createRoot(document.getElementById("root")).render(<Home />);
