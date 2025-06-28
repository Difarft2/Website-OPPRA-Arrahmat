import Navbarr from "../../../../components/global/navbar";
import Footer from "../../../../components/global/footer";
import Herodev from "../../../../components/devisi/subcomponent/herodev";
import gambar from "../../../../assets/img/masabakti/2024-2025/MainPhoto.svg";
import Profidev from "../../../../components/devisi/subcomponent/profildev";
import Anggota from "../../../../components/devisi/subcomponent/anggotadev";

const title = "DIVISI BAHASA";
const desjudul = "";
import logobahasa from "../../../../assets/logo/divisi/bahasa.svg";
import { profilDevisiBahasa } from "../../../../content/profil";
import {
  dataBahasaKelas11,
  dataBahasaKelas9,
} from "../../../../content/anggota";
import ProgramKerjaBahasa from "./proper/bahasa";

function Bahasa() {
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
          profildev={profilDevisiBahasa}
          logoDevisi={logobahasa}
          judul={title}
        />
        <Anggota kelas11={dataBahasaKelas11} kelas9={dataBahasaKelas9} />
        <ProgramKerjaBahasa/>
        <Footer />
      </div>
    </div>
  );
}

export default Bahasa;
