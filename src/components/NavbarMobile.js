// src/components/NavbarMobile.js
import React, { useEffect, useState } from "react";
import logoWhite from "../images/logo_white.png";
import logoBlack from "../images/logo.png";
import instagramIcon from "../images/instagram-header.svg";
import facebookIcon from "../images/facebook-header.svg";
import linkedinIcon from "../images/linkedin-header.svg";

function NavbarMobile() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-part flex items-start justify-between sm:mx-6 p-[0.5rem] sm:p-[1rem]`}
    >
      <div className="logo-body">
        <a className="navbar-item flex items-center justify-center sm:justify-start">
          <img src={logoBlack} alt="Logo" className="w-32" />
        </a>
      </div>
      <div className="social-links flex items-center gap-3">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default NavbarMobile;
