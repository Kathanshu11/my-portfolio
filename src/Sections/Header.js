import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function Header() {
   const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

  };
  return (
    <>
    <nav className="navbar navbar-expand-lg transparent-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          Kathanshu Portfolio
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          // aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {isOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars-staggered"></i>
            )}
          </span>
        </button>

        {/* Navbar Menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item navigation-links mx-4">
              <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item navigation-links mx-4">
              <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className="nav-item navigation-links mx-4">
              <Link to="/certificates" onClick={() => setIsOpen(false)}>Certificate</Link>
            </li>
            <li className="nav-item navigation-links mx-4">
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
          </ul>

          <ul className="nav nav-social-links">
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/kathanshupatil01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Kathanshu11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.instagram.com/kathanshu.11/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
