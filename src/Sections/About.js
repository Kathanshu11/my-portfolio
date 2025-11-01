import { useEffect, useRef, useState } from "react";
import pic from "../img/home.png";

export default function About() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) setTextVisible(true);
            if (entry.target === imgRef.current) setImgVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div className="container about-section">
      <div className="row align-items-center">
        <div
          className={`col-md-6 fade-in ${textVisible ? "visible" : ""}`}
          ref={textRef}
        >
          <p style={{ textAlign: "justify" }}>
            I am Kathanshu Patil, a passionate and dedicated fresher with a
            background in Computer Science, eager to establish myself as a Full
            Stack Java Developer. I have hands-on experience with technologies
            including Java, SQL, HTML, CSS, JavaScript, Git, and GitHub, and I
            am constantly striving to expand my technical skill set. I recently
            completed my Master of Computer Applications (MCA) from Kamala Nehru
            College, Nagpur University, achieving a CGPA of 6.7.
            <br />
            <br />
            I have actively participated in multiple projects, including 3
            major projects and over 8 smaller projects, which have honed my
            ability to design, develop, and deploy efficient and scalable
            applications. My experience spans front-end development, back-end
            logic, database management, and version control, enabling me to
            approach projects holistically and deliver end-to-end solutions.
            <br />
            <br />
            I am highly passionate about problem-solving and continuously
            improving my skills. My core strengths include:
            <br />
            <br />
            <i className="fa-solid fa-circle-check"></i> Soft Skills: Effective
            communication, teamwork, and time management <br /><br />
            <i className="fa-solid fa-circle-check"></i> Analytical Thinking:
            Ability to analyze complex problems and devise efficient solutions
            <br /><br />
            <i className="fa-solid fa-circle-check"></i> Team Collaboration:
            Experience working in collaborative environments to deliver
            high-quality results
            <br />
            <br />
            In addition to my technical skills, I am familiar with 8+
            programming languages, which strengthens my adaptability and
            capability to work with diverse technologies. My goal is to
            contribute to innovative projects, enhance my development expertise,
            and grow as a professional in the IT field. I thrive on challenges
            and am committed to delivering robust, scalable, and maintainable
            solutions.
          </p>
        </div>
        <div
          className={`col-md-6 text-center fade-in ${imgVisible ? "visible" : ""}`}
          ref={imgRef}
        >
          <img src={pic} className="dark-filter img-fluid rounded-circle" alt="About Me" />
        </div>
      </div>
    </div>
  );
}
