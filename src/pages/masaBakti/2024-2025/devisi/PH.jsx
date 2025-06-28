import { useEffect, useRef } from "react";
import Navbarr from "../../../../components/global/navbar";
import Footer from "../../../../components/global/footer";
import Herodev from "../../../../components/devisi/subcomponent/herodev";
import gambar from "../../../../assets/img/masabakti/2024-2025/MainPhoto.svg";
import Profidev from "../../../../components/devisi/subcomponent/profildev";

const title = "DIVISI DAILY MANAGER";
const desjudul = "Pengawas Harian";
import logoph from "../../../../assets/logo/Logo OPPRA.svg";
import { profilDevisiPH } from "../../../../content/profil";
import ProgramKerjaPH from "./proper/ph";

function PH() {
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

    // Observasi elemen card
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
    <div>
      <Navbarr />
      <Herodev
        judulherodev={title}
        desjudulherodev={desjudul}
        mainPhoto={gambar}
      />
      <Profidev profildev={profilDevisiPH} logoDevisi={logoph} judul={title} />
      <div className="vm-container">
        <div className="vm-section-title">
          <h2 className="vm-title-text">ANGGOTA</h2>
          <div className="vm-line-container">
            <span className="vm-line-circle"></span>
            <span className="vm-line"></span>
            <span className="vm-line-circle"></span>
          </div>
        </div>
        <div className="vm-content">
          <div className="vm-card-container">
            <div className="vm-card" ref={(el) => (cardRefs.current[0] = el)}>
              <p className="vm-title-text">
                Ketua: Arrafi Raihan Ramadhan  <br />
                Wakil 1: Firman Yuda Islami <br />
                Wakil 2: Sigit Sugiharto <br />
                Sekretaris 1: Ahsan Fathur Rahman Alf  <br />
                Sekretaris 2: Muhammad Arvind Nuruddin<br />
                Bendahara 1: Achmad Mayqi Alhazimi<br />
                Bendahara 2: Athaillah Abi Fahrenzi
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProgramKerjaPH/>
      <Footer />
    </div>
  );
}

export default PH;
