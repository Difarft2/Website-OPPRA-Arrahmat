import { useEffect, useRef } from "react";
import "../../css/devisiCss/ph.css";

import seketaris1 from "../../assets/foto/seketaris1.svg";
import seketaris2 from "../../assets/foto/seketaris2.svg";
import bendahara1 from "../../assets/foto/bendahara1.svg";
import bendahara2 from "../../assets/foto/bendahara2.svg";
import kanan from '../../assets/img/title1.svg';
import kiri from '../../assets/img/title2.svg';

const PH = () => {
  const cardRefs = useRef([]); // Referensi elemen

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.style.transitionDelay = `${index * 0.2}s`; // Efek delay
          }
        });
      },
      { threshold: 0.3 } // Elemen dianggap terlihat jika minimal 10% muncul
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="ph">
      <div className="title-ph-container">
        <img src={kiri} alt="kiri" className="kiri" />
        <h2 className="title-ph">DAILY MANAGER</h2>
        <img src={kanan} alt="kanan" className="kanan" />
      </div>
      <div className="ph-container">
        <div
          className="seketaris1 animate-from-left"
          ref={(el) => (cardRefs.current[0] = el)}
        >
        <a
          href="https://www.instagram.com/alfuryy.f/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={seketaris1} alt="seketaris1" className="seketaris1-img" />
        </a>
        </div>
        <div
          className="seketaris2 animate-from-right"
          ref={(el) => (cardRefs.current[1] = el)}
        >
        <a
          href="https://www.instagram.com/isme.udden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={seketaris2} alt="seketaris2" className="seketaris2-img" />
        </a>
        </div>
        <div
          className="bendahara1 animate-from-left"
          ref={(el) => (cardRefs.current[2] = el)}
        >
        <a
          href="https://www.instagram.com/myqqi_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bendahara1} alt="bendahara1" className="bendahara1-img" />
        </a>
        </div>
        <div
          className="bendahara2 animate-from-right"
          ref={(el) => (cardRefs.current[3] = el)}
        >
        <a
          href="https://www.instagram.com/athaillahabi10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bendahara2} alt="bendahara2" className="bendahara2-img" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default PH;
