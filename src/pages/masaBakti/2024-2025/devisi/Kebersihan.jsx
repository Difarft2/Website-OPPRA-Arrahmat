import Navbarr from "../../../../components/global/navbar";
import Footer from "../../../../components/global/footer";
import Herodev from "../../../../components/devisi/subcomponent/herodev";
import gambar from "../../../../assets/img/masabakti/2024-2025/MainPhoto.svg";
import Profidev from "../../../../components/devisi/subcomponent/profildev";
import Anggota from "../../../../components/devisi/subcomponent/anggotadev";

const title = "DIVISI KESEHATAN";
const desjudul = "KESEHATAN DAN KEBERSIHAN";
import logokebersihan from "../../../../assets/logo/divisi/kebersihan.svg";
import { profilDevisiKebersihan } from "../../../../content/profil";
import {
  dataKebersihanKelas11,
  dataKebersihanKelas9,
} from "../../../../content/anggota";
import ProgramKerjaKebersihan from "./proper/kebersihan";

function Kebersihan() {
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
          profildev={profilDevisiKebersihan}
          logoDevisi={logokebersihan}
          judul={title}
        />
        <Anggota
          kelas11={dataKebersihanKelas11}
          kelas9={dataKebersihanKelas9}
        />
        <ProgramKerjaKebersihan/>
        <Footer />
      </div>
    </div>
  );
}

export default Kebersihan;
