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
          } else {
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
      about: (
        <>
          <h6>
            <i class="fa-regular fa-circle-check"></i>Built a strong academic
            foundation and essential learning skills
          </h6>
        </>
      ),
    },
    {
      year: "2018-2019",
      title: "Higher School Certificate",
      desc: "Cgpa 5.5",
      about: (
        <>
          <h6>
            <i class="fa-regular fa-circle-check"></i>Focused on advanced
            studies and personal skill development
          </h6>
        </>
      ),
    },
    {
      year: "2019-2023",
      title: "Bachelor of Science",
      desc: (
        <>
          Nagpur University <br /> Cgpa 6.7
        </>
      ),
      about: (
        <>
          <h6>
            <i class="fa-regular fa-circle-check"></i>Graduated in 2023 with a
            focus on academic growth and practical learning
          </h6>
        </>
      ),
    },
    {
      year: "2023-2025",
      title: "Master of Computer Application",
      desc: (
        <>
          Nagpur University <br /> Cgpa 6.7
        </>
      ),
      about: (
        <>
          <h6>
            <i class="fa-regular fa-circle-check"></i>Pursuing advanced studies
            in software development, data systems, and emerging technologies
          </h6>
        </>
      ),
    },
    {
      year: "Jan-July-25",
      title: "Internship",
      desc: "Java full stack Developer",
      about: (
        <>
          <h6>
            <i class="fa-regular fa-circle-check"></i>Gained hands-on experience
            in front-end and back-end development, building dynamic and
            efficient web applications
          </h6>
        </>
      ),
    },
  ];

  return (
    <>
      {/* <div className="d-flex justify-content-center my-4">
        <div className="ribbon">Experience</div>
      </div> */}

      <div class="heading-sec">Experience</div>

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
                  <p className="card-subtitle mb-2 text-muted">{exp.year}</p>
                  <h1 className="card-title">{exp.title}</h1>
                  <h6 className="ex-content">{exp.desc}</h6>
                  <h6>{exp.about}</h6>
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
