import { useEffect } from "react";
import Navbar from "../../components/global/navbar";
import "./profil.css";
import Button from "react-bootstrap/Button";

import logooppra from "../../assets/logo/Logo OPPRA.svg";
import logopondok from "../../assets/logo/logopondok.svg";
import Footer from "../../components/global/footer";
import { profilMin, profilsekolah } from "../../content/profil";
import { webarahmat } from "../../content/link";

function Profil() {
  useEffect(() => {
    const oppra = document.querySelector(".oppra");
    const pondok = document.querySelector(".pondok");

    oppra?.classList.add("animated-left");
    pondok?.classList.add("animated-right");
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
      <div className="bg-pr">
        <Navbar />

        <div className="pro-section-title">
          <h2 className="vm-title-text">PROFIL</h2>
          <div className="vm-line-container">
            <span className="vm-line-circle"></span>
            <span className="vm-line"></span>
            <span className="vm-line-circle"></span>
          </div>
        </div>

        <div className="container-fluid">
          <div className="oppra animated-left">
            <img className="logo-oppra" src={logooppra} alt="Logo Oppra" />
            <div className="tulisan-oppra">
              <h2>OPPRA</h2>
              <div>{formatProfil(profilMin)}</div>
            </div>
          </div>

          <div className="pondok animated-right">
            <img className="logo-pondok" src={logopondok} alt="Logo Pondok" />
            <div className="tulisan-pondok">
              <h2>YAYASAN PPM AR RAHMAT</h2>
              <div>{formatProfil(profilsekolah)}</div>
              <a href={webarahmat} target="_blank" rel="noopener noreferrer">
                <Button className="button-webpondok" variant="warning">
                  Website PPM Ar Rahmat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profil;
