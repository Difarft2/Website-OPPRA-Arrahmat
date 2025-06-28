import Navbarr from "../../../../components/global/navbar";
import Footer from "../../../../components/global/footer";
import Herodev from "../../../../components/devisi/subcomponent/herodev";
import gambar from "../../../../assets/img/masabakti/2024-2025/MainPhoto.svg";
import Profidev from "../../../../components/devisi/subcomponent/profildev";
import Anggota from "../../../../components/devisi/subcomponent/anggotadev";

const title = "DIVISI I'LAM";
const desjudul = "PENERANGAN DAN INFORMASI";
import logoilan from "../../../../assets/logo/divisi/ilan.svg";
import { profilDevisiIlanPenerangan } from "../../../../content/profil";
import { dataIlamKelas11, dataIlamKelas9 } from "../../../../content/anggota";
import ProgramKerjaPemanggilan from "./proper/ilan";

function Ilan() {
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
          profildev={profilDevisiIlanPenerangan}
          logoDevisi={logoilan}
          judul={title}
        />
        <Anggota kelas11={dataIlamKelas11} kelas9={dataIlamKelas9} />
        <ProgramKerjaPemanggilan/>
        <Footer />
      </div>
    </div>
  );
}

export default Ilan;
