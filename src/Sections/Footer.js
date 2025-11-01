import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="xxx">
                <circle cx="7" cy="12" r="40" fill="#fff" />
              </mask>

              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 13 -9"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>

              <path
                id="wave"
                d="M 0,10 C 30,10 30,15 60,15 
             90,15 90,10 120,10 
             150,10 150,15 180,15 
             210,15 210,10 240,10 
             v 28 h -240 z"
              />
            </defs>

            <use id="wave3" className="wave" href="#wave" x="0" y="-2" />
            <use id="wave2" className="wave" href="#wave" x="0" y="0" />

            <g className="gooeff">
              <use id="wave1" className="wave" href="#wave" x="0" y="1" />

              <path
                id="wave1"
                className="wave"
                d="M 0,10 C 30,10 30,15 60,15 
             90,15 90,10 120,10 
             150,10 150,15 180,15 
             210,15 210,10 240,10 
             v 28 h -240 z"
              />
            </g>
          </svg>

          <div className="container-fluid footer-content">
            <div className="row footer-row">
              <div className="col-md-3">
                <h5>Residence</h5>
                <i class="fa-solid fa-location-dot"></i>-xxxxx xxxx, Nagpur,
                440XXX
              </div>
              <div className="col-md-3">
                <h5>Connect</h5>
                <ul class="nav">
                  <li class="nav-item">
                    <a
                      href="https://www.linkedin.com/in/kathanshupatil01/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="https://github.com/Kathanshu11" target="_blank">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.instagram.com/kathanshu.11/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.facebook.com/kathanshu.patil.90"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Get in touch</h5>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=skathanshupatil11@gmail.com<"
                  target="_blank"
                  className="email"
                >
                  <i class="fa-solid fa-envelope"></i>kathanshupatil11@gmail.com
                </a>
              </div>
              <div className="col-md-3">
                <h5>Kathanshu Portfolio</h5>
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
