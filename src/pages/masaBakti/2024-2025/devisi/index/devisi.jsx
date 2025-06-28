import "../css/css/devisi.css";
import Navbarr from "../../../../../components/global/navbar";
import Footer from "../../../../../components/global/footer";
import Ketuawakil from "./ketuawakil";
import PH from "./ph";
import Subdevisi from "./subdevisi";

function Devisi() {
  return (
    <div className="bg-de">
      <div className="de-section-title">
        <h2 className="de-title-text">DIVISI</h2>
        <div className="de-line-container">
          <span className="de-line-circle"></span>
          <span className="de-line"></span>
          <span className="de-line-circle"></span>
        </div>
      </div>
      <div className="content-de">
        <Ketuawakil />
        <PH />
        <Subdevisi />
      </div>
    </div>
  );
}

export default Devisi;
