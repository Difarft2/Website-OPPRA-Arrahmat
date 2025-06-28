import Navbarr from "../../../../components/global/navbar";
import Footer from "../../../../components/global/footer";
import Herodev from "../../../../components/devisi/subcomponent/herodev";
import gambar from "../../../../assets/img/masabakti/2024-2025/MainPhoto.svg";
import Profidev from "../../../../components/devisi/subcomponent/profildev";
import Anggota from "../../../../components/devisi/subcomponent/anggotadev";

const title = "DIVISI TAKMIR";
const desjudul = "";
import logotakmir from "../../../../assets/logo/divisi/takmir.svg";
import { profilDevisiTakmir } from "../../../../content/profil";
import {
  dataTarmirKelas11,
  dataTarmirKelas9,
} from "../../../../content/anggota";
import ProgramKerjaTakmir from "./proper/takmir";

function Takmir() {
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
          profildev={profilDevisiTakmir}
          logoDevisi={logotakmir}
          judul={title}
        />
        <Anggota kelas11={dataTarmirKelas11} kelas9={dataTarmirKelas9} />
        <ProgramKerjaTakmir/>
        <Footer />
      </div>
    </div>
  );
}

export default Takmir;
