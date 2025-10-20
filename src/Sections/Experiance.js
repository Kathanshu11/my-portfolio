import React, { useEffect, useRef } from "react";
export default function Experiance() {
  const experienceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    experienceRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      year: "2016-2017",
      title: "Secondary School Certificate",
      desc: "Cgpa 6.8",
    },
    {
      year: "2018-2019",
      title: "Higher School Certificate",
      desc: "Cgpa 5.5",
    },
    {
      year: "2019-2023",
      title: "Bachelor of Science",
      desc: (
        <>
          Nagpur University <br /> Cgpa 6.7
        </>
      ),
    },
    {
      year: "2023-2025",
      title: "Master of Computer Application",
      desc: (
        <>
          Nagpur University <br />  Cgpa 6.7
        </>
      ),
    },
    {
      year: "Jan-July-25",
      title: "Internship",
      desc: "Java full stack Developer",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <div className="ribbon">Experience</div>
      </div>

      <div className="experience">
        <div className="experience-container">
          {experiences.map((exp, i) => (
            <div
              className="experience-item hidden"
              key={i}
              ref={(el) => (experienceRefs.current[i] = el)}
            >
              <div className="connector-line"></div>
              <div className="card ex-cards" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">{exp.year}</h6>
                  <h5 className="card-title">{exp.title}</h5>
                  <p className="ex-content">{exp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <hr />
      </div>
    </>
  );
}
