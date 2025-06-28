import { useEffect, useRef } from "react";
import "./css/visimisi.css";

import ukir from "../../../assets/img/masabakti/2024-2025/ukir.svg";

const Visimisi = () => {
  const decorRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // Elemen terlihat 30% untuk memicu animasi
    );

    // Observasi elemen decor
    decorRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observasi elemen card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      decorRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="vm-container">
      <div className="vm-section-title">
        <h2 className="vm-title-text">VISI & MISI</h2>
        <div className="vm-line-container">
          <span className="vm-line-circle"></span>
          <span className="vm-line"></span>
          <span className="vm-line-circle"></span>
        </div>
      </div>
      <div className="vm-content">
        <div
          className="vm-decor-left"
          ref={(el) => (decorRefs.current[0] = el)}
        >
          <img src={ukir} alt="Decor Left" />
        </div>
        <div className="vm-card-container">
          <div className="vm-card" ref={(el) => (cardRefs.current[0] = el)}>
            <h3 className="vm-card-title">VISI</h3>
            <p className="vm-title-text">
              Berperan sebagai wadah bagi santri untuk mengembangkan seluruh
              potensi yang dimiliki, dengan tujuan mewujudkan santri yang
              cerdas, inovatif, bergerak dinamis, unggul dalam prestasi, serta
              menunjukkan etika bermutu yang berlandaskan iman dan taqwa.
            </p>
          </div>
          <div className="vm-card" ref={(el) => (cardRefs.current[1] = el)}>
            <h3 className="vm-card-title">MISI</h3>
            <ol className="vm-title-text">
              <li>
                Meningkatkan iman dan taqwa santri kepada Allah SWT, dalam
                ibadah wajib maupun ibadah sunnah.
              </li>
              <li>
                Mengembangkan potensi santri dalam bidang akademik dan
                non-akademik.
              </li>
              <li>Mengaktifkan kembali ekstrakurikuler yang belum maksimal.</li>
              <li>Menggalakkan program pesantren Adiwiyata.</li>
              <li>
                Membentuk hubungan yang harmonis antar santri dan berupaya
                menghilangkan senioritas.
              </li>
              <li>
                Meningkatkan sistem belajar mandiri sesuai minat bidang dan
                bakat santri.
              </li>
              <li>Membangkitkan sifat kompetitif yang sehat antar santri.</li>
            </ol>
          </div>
        </div>
        <div
          className="vm-decor-right"
          ref={(el) => (decorRefs.current[1] = el)}
        >
          <img src={ukir} alt="Decor Right" />
        </div>
      </div>
    </div>
  );
};

export default Visimisi;
