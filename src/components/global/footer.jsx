import React, { useEffect, useRef } from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

import igIco from "../../assets/logo/instagram-logo.svg";
import ytico from "../../assets/logo/youtube.svg";
import web from "../../assets/logo/globe.svg";
import mapico from "../../assets/logo/map.svg";

import {
  igarmaso,
  igartimes,
  igliga,
  igoppra,
  webarahmat,
  ytarrahmat,
  lokasi,
  webarmaso,
} from "../../content/link";

const Footer = () => {
  const footerContentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const refs = footerContentRefs.current.slice();

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <div>
        <footer>
          {/* Background Wave Animation */}
          <div className="background">
            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 1600 900"
                            width="100%"
                            height="100%"
                        >
                            <defs>
                                <path
                                    id="wave"
                                    fill="rgba(255, 209, 142, 0.6)"
                                    d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                                    s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                                />
                            </defs>
                            <g className="wave-animation">
                                <use xlinkHref="#wave" opacity=".4">
                                    <animateTransform
                                        attributeName="transform"
                                        type="translate"
                                        dur="8s"
                                        calcMode="spline"
                                        values="270 230; -334 180; 270 230"
                                        keyTimes="0; .5; 1"
                                        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                        repeatCount="indefinite"
                                    />
                                </use>
                                <use xlinkHref="#wave" opacity=".9">
                                    <animateTransform
                                        attributeName="transform"
                                        type="translate"
                                        dur="6s"
                                        calcMode="spline"
                                        values="-270 230;243 220;-270 230"
                                        keyTimes="0; .6; 1"
                                        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                        repeatCount="indefinite"
                                    />
                                </use>
                                <use xlinkHref="#wave" opacity=".9">
                                    <animateTransform
                                        attributeName="transform"
                                        type="translate"
                                        dur="4s"
                                        calcMode="spline"
                                        values="0 230;-140 200;0 230"
                                        keyTimes="0; .4; 1"
                                        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                        repeatCount="indefinite"
                                    />
                                </use>
                            </g>
                        </svg> */}
          </div>

          {/* Section Title */}
          <div className="fo-section-title">
            <h2 className="fo-title-text">MEDIA SOSIAL</h2>
            <div className="fo-line-container">
              <span className="fo-line-circle"></span>
              <span className="fo-line"></span>
              <span className="fo-line-circle"></span>
            </div>
          </div>

          {/* Footer Content */}
          <div className="footer-so">
            <div
              className="footer-left"
              ref={(el) => (footerContentRefs.current[1] = el)}
            >
              <div className="icon-map">
                <img src={mapico} alt="Map Logo" />
                <p>
                  <a href={lokasi} target="_blank" rel="noopener noreferrer">
                    PPM Ar Rahmat Bojonegoro
                  </a>
                </p>
              </div>
            </div>

            <div
              className="other"
              ref={(el) => (footerContentRefs.current[2] = el)}
            >
              <nav>
                <ul className="links">
                  <li>
                    <Link to="/">BERANDA</Link>
                  </li>
                  <li>
                    <Link to="/masabakti">MASA BAKTI</Link>
                  </li>
                  <li>
                    <Link to="/artikel">ARTIKEL</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="footer-right"
              ref={(el) => (footerContentRefs.current[3] = el)}
            >
              {[
                { href: igoppra, icon: igIco, text: "@oppra_arrahmat" },
                { href: igarmaso, icon: igIco, text: "@armaso_arrahmat" },
                { href: igartimes, icon: igIco, text: "@artimes_arrahmat" },
                { href: igliga, icon: igIco, text: "@liga_arrahmat" },
                { href: ytarrahmat, icon: ytico, text: "Ar-Rahmat Official" },
                { href: webarahmat, icon: web, text: "arrahmat-bjn.sch.id" },
                { href: webarmaso, icon: web, text: "arrahmat-bjn.sch.id" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} alt={item.text} className="ico-fo" />{" "}
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </footer>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} OPPRA{" "}    
            <a href="https://arrahmat-bjn.sch.id/" target="_blank" rel="noopener noreferrer" className="">
                 Arrahmat
            </a>. Dikembangkan oleh Divisi Multimedia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
