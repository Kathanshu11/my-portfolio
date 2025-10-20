import "./App.css";
import Header from "./Sections/Header";
import Project from "./Sections/Project";
import About from "./Sections/About";
import Home from "./Sections/Home";
import Certificate from "./Sections/Certificate";
import Footer from "./Sections/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
