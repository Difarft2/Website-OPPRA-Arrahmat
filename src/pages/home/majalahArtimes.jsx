import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./css/arttimes.css";

import majalahCover from "../../assets/img/coverArttimes.jpg";

const Arttimes = () => {
  return (
    <section className="arttimes-section">
      <motion.div
        className="arttimes-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="arttimes-left">
          <h2 className="arttimes-title">ARTTIMES</h2>
          <p className="arttimes-desc">
            <em>Arttimes</em> adalah majalah resmi yang dikelola oleh
            Organisasi Pelajar Pondok Pesantren Modern Ar-Rahmat (OPPRA).
            Diterbitkan sebagai media informasi, edukasi, dan ekspresi santri,{" "}
            <em>Arttimes</em> menghadirkan berbagai konten seputar kegiatan
            pesantren, prestasi santri, artikel keagamaan, dan karya tulis
            kreatif.
          </p>
          <Link to="/arttimes" className="arttimes-button">
            Lihat Majalah
          </Link>
        </div>

        <div className="arttimes-right">
          <img
            src={majalahCover}
            alt="Cover Majalah Arttimes"
            className="arttimes-image"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Arttimes;
