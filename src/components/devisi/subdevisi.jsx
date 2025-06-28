import "../../css/devisiCss/sundevisi.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import bot from "../../assets/foto/BOT.svg";
import keamanan from "../../assets/foto/keamanan.svg";
import kesehatan from "../../assets/foto/kesehatan.svg";
import takmir from "../../assets/foto/takmir.svg";
import bahasa from "../../assets/foto/bahasa.svg";
import penerangan from "../../assets/foto/penerangan.svg";
import kanan from "../../assets/img/title1.svg";
import kiri from "../../assets/img/title2.svg";

const Subdevisi = () => {
  useEffect(() => {
    // Observer untuk animasi saat scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Tambahkan class 'active'
        }
      });
    });

    const subElements = document.querySelectorAll(".sub");
    subElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="subdevisi">
      <div className="title-ph-container">
        <img src={kiri} alt="kiri" className="kiri" />
        <h2 className="title-ph">KETUA DIVISI</h2>
        <img src={kanan} alt="kanan" className="kanan" />
      </div>

      <div className="sub-container">
        <div className="sub">
          <a
            href="https://www.instagram.com/f.lavaa_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bot} alt="BOT" className="img-sub" />
          </a>
          <Link to="/devisi/bot">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <a
            href="https://www.instagram.com/mar.ammar3?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={keamanan} alt="Keamanan" className="img-sub" />
          </a>
          <Link to="/devisi/keamanan">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <a
            href="https://www.instagram.com/ubaid_alhakim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kesehatan} alt="Kesehatan" className="img-sub" />
          </a>
          <Link to="/devisi/kesehatan">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <a
            href="https://www.instagram.com/akujojoz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={takmir} alt="Takmir" className="img-sub" />
          </a>
          <Link to="/devisi/takmir">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <a
            href="https://www.instagram.com/pb498_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bahasa} alt="Bahasa" className="img-sub" />
          </a>
          <Link to="/devisi/bahasa">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <a
            href="https://www.instagram.com/rafifibrahim_m/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={penerangan} alt="Penerangan" className="img-sub" />
          </a>
          <Link to="/devisi/ilan">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subdevisi;
