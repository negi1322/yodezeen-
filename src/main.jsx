import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import Service from "./Service";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  </BrowserRouter>,
);
