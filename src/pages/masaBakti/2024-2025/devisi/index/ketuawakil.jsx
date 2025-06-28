import "./../css/css/devisiCss/ketuawakil.css";

import ketua from "../../../../../assets/img/masabakti/2024-2025/foto/ketua.svg";
import wakil from "../../../../../assets/img/masabakti/2024-2025/foto/wakil.svg";
import ukiran1 from "../../../../../assets/img/masabakti/2024-2025/ukiran1.svg";
import ukiran2 from "../../../../../assets/img/masabakti/2024-2025/ukiran2.svg";

const Ketuawakil = () => {
  return (
    <div className="ketua-wakil">
      <img src={ukiran2} alt="ukiran" className="ukiran-atas" />
      <div className="ketuawakil-container">
        <a
          href="https://www.instagram.com/arfraihan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ketua} alt="ketua" className="ketua-img" />
        </a>
        <div className="ukiran">
          <img src={ukiran1} alt="ukiran" className="ukiran-img" />
        </div>
        <a
          href="https://www.instagram.com/frmnyudaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wakil} alt="wakil" className="wakil-img" />
        </a>
      </div>
    </div>
  );
};

export default Ketuawakil;
