import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import Service from "./Service";
import DetailService from "./DetailService";
import ConnectPage from "./Contact";
import News from "./News";
import About from "./About";
import Career from "./Career";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/service" element={<Service />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ConnectPage />} />
      <Route path="/news" element={<News />} />
      <Route path="/detail/:service" element={<DetailService />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  </BrowserRouter>,
);
