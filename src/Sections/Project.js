import { useEffect, useRef } from "react";

import one from "../img/ProjectImg/1.png";
import three from "../img/ProjectImg/3.png";
import four from "../img/ProjectImg/4.png";
import five from "../img/ProjectImg/5.png";

import o from "../img/ProjectImg/p1.png";
import t from "../img/ProjectImg/p2.png";
import th from "../img/ProjectImg/p3.png";
import fo from "../img/ProjectImg/p4.png";
import fi from "../img/ProjectImg/p5.png";

import li from "../img/ProjectImg/l2.png";
import lib from "../img/ProjectImg/l3.png";
import liba from "../img/ProjectImg/l4.png";
import libary from "../img/Libray.pdf"

export default function Project() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      {/* ------------------- E-Commerce ------------------- */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="row projects-section"
      >
        <h1 className="text-center">E-Commerce (Shopping Site)</h1>
        <div className="col-md-6">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[one, three, four, five].map((img, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                >
                  <img src={img} className="d-block w-100" alt="project" />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <a href="#" className="btn btn-primary w-100 mt-2 mb-1">
            View here
          </a>
        </div>
        <div className="col-md-6">
          <p>
           <b> Description :</b>
              This project is a simple E-commerce web application developed
              using Java Spring Boot with Spring Data JPA, Spring Security, and
              MySQL. It features separate Admin and User sections:
              <br />
              <i class="fa-solid fa-arrow-right"></i> Admin Section: Admin can
              add, update, delete, and view products, manage inventory, and
              oversee the product catalog.
              <br />
              <i class="fa-solid fa-arrow-right"></i> User Section: Users can
              browse products, view details, and interact with the online store.
             <br />
             <i class="fa-solid fa-arrow-right"></i> The project demonstrates
             secure user authentication, role-based access control, and
            database management using MySQL. It is designed as a foundational
              shopping site suitable for learning full-stack Java development
              and implementing basic e-commerce functionalities.
              <br />
               <i class="fa-solid fa-check"></i> Technologies Used:
               <br />
               <i class="fa-solid fa-check"></i> Java, Spring Boot
               <br />
               <i class="fa-solid fa-check"></i> Spring Web, Spring Data JPA
               <br />
               <i class="fa-solid fa-check"></i> Spring Security
               <br />
               <i class="fa-solid fa-check"></i> MySQL
               <br />
               <i class="fa-solid fa-check"></i> RESTful APIs
          </p>
        </div>
      </div>

      
      {/* ------------------- Portfolio ------------------- */}
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="row projects-section"
      >
        <h1 className="text-center">Portfolio Website</h1>
        <div className="col-md-6">
          <div
            id="carouselProtfolio"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[o, t, th, fo, fi].map((img, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                >
                  <img src={img} className="d-block w-100" alt="project" />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselProtfolio"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselProtfolio"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <a href="#" className="btn btn-primary w-100 mt-2 mb-1">
            View here
          </a>
        </div>
        <div className="col-md-6">
          <p>
             <b> Description:</b>
               <br />
               <i class="fa-solid fa-check"></i> A responsive portfolio website
               built using React.js and React DOM to showcase my skills,
               projects, and experience.
               <br />
               <i class="fa-solid fa-check"></i> Includes dynamic sections like
               Home, About, Skills, Projects, and Contact for easy navigation.
               <br />
               <i class="fa-solid fa-check"></i> Integrated EmailJS to enable
               direct email communication through a functional contact form.
               <br />
               <i class="fa-solid fa-check"></i> Designed with a modern UI/UX and
               smooth transitions for a professional look.
               <br />
               <i class="fa-solid fa-check"></i> Demonstrates strong
               understanding of React components, state management, and front-end
               development.
               <br />
               <i class="fa-solid fa-check"></i> Optimized for both desktop and
               mobile devices for a seamless user experience.
               <br />
               <b> Technologies Used:</b>
               React.js, React DOM, EmailJS, HTML5, CSS3, JavaScript, Bootstrap
          </p>
        </div>
      </div>

      {/* ------------------- Bank Management ------------------- */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="row projects-section"
      >
        <h1 className="text-center">Libary Management System</h1>
        <div className="col-md-6">
          <div
            id="carouselWeather"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[li, lib, liba].map((img, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                >
                  <img src={img} className="d-block w-100" alt="project" />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselWeather"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselWeather"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <a href={libary} className="btn btn-primary w-100 mt-2 mb-1">
            View here
          </a>
        </div>
        <div className="col-md-6">
          <p>
            <b>Description:</b> This project is a simple console-based Library
            Management System developed using core Java and Object-Oriented
            Programming (OOP) concepts. It manages essential library operations
            such as adding new books, issuing and returning books, searching for
            books, and managing member records. The system applies key OOP
            principles like encapsulation, inheritance, and polymorphism to
            simulate real-world library functions and provides a clear
            understanding of Java OOP design and class structure. <br />{" "}
            <b>Technologies Used:</b> <br /> <i class="fa-solid fa-check"></i>{" "}
            Java (Core Java) <br /> <i class="fa-solid fa-check"></i>{" "}
            Object-Oriented Programming (OOP) <br />{" "}
            <i class="fa-solid fa-check"></i> File Handling (for data storage)
            <br /> <i class="fa-solid fa-check"></i> Collections Framework 
          </p>
        </div>
      </div>
    </div>
  );
}

