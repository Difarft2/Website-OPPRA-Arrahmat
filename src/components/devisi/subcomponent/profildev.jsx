import React, { useState, useEffect, useRef } from 'react';

const Profidev = ({ logoDevisi, profildev, judul }) => {
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Fungsi untuk memformat profildev menjadi beberapa paragraf
  const formatProfil = (profil) => {
    return profil.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mp-description">{paragraph}</p>
    ));
  };

  return (
    <section className="mp-section" id="profilMini">
      <div
        ref={containerRef}
        className={`mp-container ${isVisible ? 'fade-in' : ''}`}
      >
        <div className="mp-logo">
          <img src={logoDevisi} alt="Logo divisi" className="logo" />
        </div>
        <div className="mp-content">
          <div className="section-title">
            <h2 className="title-text">{judul}</h2>
          </div>
          {/* Render profildev sebagai paragraf */}
          {formatProfil(profildev)}
        </div>
      </div>
    </section>
  );
};

export default Profidev;
