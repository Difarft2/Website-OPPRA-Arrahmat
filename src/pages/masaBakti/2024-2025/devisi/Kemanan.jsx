import Navbarr from "../../../../components/global/navbar";
import Footer from "../../../../components/global/footer";
import Herodev from "../../../../components/devisi/subcomponent/herodev";
import gambar from "../../../../assets/img/masabakti/2024-2025/MainPhoto.svg";
import Profidev from "../../../../components/devisi/subcomponent/profildev";
import Anggota from "../../../../components/devisi/subcomponent/anggotadev";

const title = "DIVISI KEAMANAN";
const desjudul = "KEAMANAN DAN KETERTIBAN";
import logokeamanan from "../../../../assets/logo/divisi/keamanan.svg";
import { profilDevisiKeamanan } from "../../../../content/profil";
import {
  dataKeamananKelas11,
  dataKeamananKelas9,
} from "../../../../content/anggota";
import { ProgressBar } from "react-bootstrap";
import ProgramKerjaKeamanan from "./proper/keamanan";

function Keamanan() {
  return (
    <div>
      <div>
        <Navbarr />
        <Herodev
          judulherodev={title}
          desjudulherodev={desjudul}
          mainPhoto={gambar}
        />
        <Profidev
          profildev={profilDevisiKeamanan}
          logoDevisi={logokeamanan}
          judul={title}
        />
        <Anggota kelas11={dataKeamananKelas11} kelas9={dataKeamananKelas9} />
        <ProgramKerjaKeamanan/>
        <Footer />
      </div>
    </div>
  );
}

export default Keamanan;
