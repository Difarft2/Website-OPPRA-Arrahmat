import React, { useState, useEffect, useRef } from "react";
import "./css/profilmini.css";

import logoOppra from "../../assets/logo/Logo OPPRA.svg";
import { profilMin } from "../../content/profil";
import { Link } from "react-router-dom";

const Profilmini = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Aktif jika 30% elemen terlihat
    );

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const formatProfil = (profil) => {
    return profil.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mp-description">
        {paragraph}
      </p>
    ));
  };

  return (
    <div>
      <section className="mp-section">
        <div
          ref={containerRef}
          className={`mp-container ${isVisible ? "fade-in" : ""}`}
        >
          <div className="mp-logo">
            <img src={logoOppra} alt="Logo opra" className="logo" />
          </div>
          <div className="mp-content">
            <div className="section-title">
              <h2 className="title-text">TENTANG KAMI</h2>
              <div className="line-container">
                <span className="line-circle"></span>
                <span className="line"></span>
                <span className="line-circle"></span>
              </div>
            </div>
            <div>{formatProfil(profilMin)}</div>
            <Link to="/profil">
              <button className="read-more-btn">PROFIL ➝</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profilmini;
