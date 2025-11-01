import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [showForm, setShowForm] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll(".from-box");

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

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggvw999",
        "template_bpbv821",
        e.target,
        "i8mE48856mPantX7f"
      )
      .then(
        (result) => {
          setShowForm(false);
          setShowAnimation(true);

          setTimeout(() => {
            setShowAnimation(false);
            setShowForm(true);
          }, 3600);

          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="from-box section">
        <div className="container form">
          {showForm && (
            <form id="contact-form" onSubmit={sendEmail}>
              {/* <div className="d-flex justify-content-center mx-5 ">
                <div className="ribbon">Contact</div>
              </div> */}
              
       <div class="heading-sec">
Contact Me
       </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Harry Johnson"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone">Phone No:</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="XXXXXXXXXX"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary w-100" type="submit">
                Submit
              </button>
            </form>
          )}

          {showAnimation && (
            <div className="animation-container text-center mt-3">
              <i className="fa-solid fa-spinner fa-spin-pulse"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
