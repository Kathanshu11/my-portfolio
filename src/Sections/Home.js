import React, { useEffect, useRef, useState } from "react";
import Experiance from "./Experiance";
import Skills from "./Skills";
import Form from "./Form";
import resume from "../img/resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import homepic from "../img/home.png";

export default function Home() {
  const [text] = useTypewriter({
    words: ["skills", "certificate", "projects"],
    loop: true,
    typeSpeed: 5,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [text1] = useTypewriter({
    words: ["Java Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 60,
    delaySpeed: 1000,
  });

  // 🔹 Refs for observing
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // 🔹 Animation trigger states
  const [isTextVisible, setTextVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === textRef.current) setTextVisible(true);
          if (entry.target === imageRef.current) setImageVisible(true);
        }
      });
    }, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="animated-bg"></div>

        <div className="row home-content my-4">
          {/* ---- LEFT SIDE TEXT ---- */}
          <div
            ref={textRef}
            className={`col-md-6 home-info reveal-animate ${
              isTextVisible ? "visible" : ""
            }`}
          >
            <div className="home-heading section">
              <h4 className="sub">Hello! My name is</h4>
              <h1 className="main pt-3">Kathanshu Patil</h1>
              <h4 className="sub">
                I'm <span>{text1}</span>
                <Cursor />
              </h4>
              <h4 className="sub">Welcome to my portfolio website</h4>
              <h4 className="sub">
                Explore <span>{text}</span>
                <Cursor /> etc.
              </h4>
              <h4 className="sub">and journey in tech.</h4>
              <a
                href={resume}
                className="btn-resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          {/* ---- RIGHT SIDE IMAGE ---- */}
          <div
            ref={imageRef}
            className={`col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mt-5 mt-md-0 home-info reveal-animate ${
              isImageVisible ? "visible" : ""
            }`}
          >
            <div className="circle-main">
              <div className="circle"></div>
              <img src={homepic} alt="Home" className="home-img" />
            </div>
          </div>
        </div>

        <hr />
      </div>

      <Experiance />
      <Skills />
      <Form />
    </>
  );
}
