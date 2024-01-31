import { createRoot } from "react-dom/client"; // Import createRoot
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Use createRoot to manage the root of your app
const root = createRoot(document.getElementById("root"));
root.render(<App />);
