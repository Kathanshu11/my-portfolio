import React, { useEffect } from "react";
import Experiance from "./Experiance";
import Skills from "./Skills";
import Form from "./Form";
import resume from "../img/resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["skills", "certificate", "projects"],
    loop: true,
    typeSpeed: 5,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [text1] = useTypewriter({
    words: ["Java Full Stack Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 60,
    delaySpeed: 1000,
  });

  // 👇 Intersection Observer added here
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // adjust visibility trigger
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="animated-bg"></div>

        {/* Home Section */}
        <div
          className="home-heading section"
          style={{ position: "relative", zIndex: 999, color: "#fff", padding: "50px" }}
        >
          <h4 className="sub">Hello! My name is</h4>
          <h1 className="main pt-3">Kathanshu Patil</h1>
          <h4 className="sub">
            I'm <span>{text1}</span>
            <Cursor />
          </h4>
          <h4 className="sub">Welcome to my portfolio website</h4>
          <h4 className="sub">
            Explore <span>{text}</span>
            <Cursor />
            etc.
          </h4>
          <h4 className="sub">and journey in tech.</h4>
          <a href={resume} className="btn-resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <hr />
      </div>

    
        <Experiance />
   
      
        <Skills />
    
        <Form />
     
    </>
  );
}
