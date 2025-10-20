import { useEffect, useRef } from "react";
import html5 from "../img/html5.png";
import css5 from "../img/CSS3.png";
import js5 from "../img/JS1.png";
import java5 from "../img/Java 17.png";
import py5 from "../img/py1.png";
import dello from "../img/Dellotie.png";
import de from "../img/delloite.pdf";

export function Certificate() {
  const containersRef = useRef([]);

  useEffect(() => {
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
      { threshold: 0.2 }
    );

    containersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      containersRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const certificates = [
    { src: html5, alt: "HTML5", link: "https://www.udemy.com/certificate/UC-cb262f84-1e03-46e6-a2d4-e94beda91522/", desc: "Hyper Text Markup Language 5" },
    { src: css5, alt: "CSS3", link: "https://www.udemy.com/certificate/UC-e199b374-cd4c-4392-96d2-3770aa07e0de/", desc: "Cascading Style Sheet 3" },
    { src: js5, alt: "JavaScript", link: "https://www.udemy.com/certificate/UC-0fe1a001-54c5-4c30-a70f-b69f0348fe30/", desc: "JavaScript" },
    { src: java5, alt: "Java", link: "https://www.udemy.com/certificate/UC-fb31e674-bb94-4979-921a-385eb01d5c05/", desc: "Advanced Java" },
    { src: py5, alt: "Python", link: "https://www.udemy.com/certificate/UC-d43b3ceb-2919-47bd-b97a-163a0f3bed06/", desc: "Python" },
    { src: dello, alt: "Deloitte", link: de, desc: "Deloitte certificate" },
  ];

  return (
    <div className="container">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="image-container"
          ref={(el) => (containersRef.current[index] = el)}
        >
          <img src={cert.src} className="card-img-top" alt={cert.alt} />
          <div className="overlay">
            <p>{cert.desc}</p>
            <a href={cert.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
              View Credential
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certificate;
