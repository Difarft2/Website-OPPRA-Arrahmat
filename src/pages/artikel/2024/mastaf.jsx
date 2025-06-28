import Artikelcomponent from "../../../components/global/artikel-components";
import { Gambar } from "../../../components/global/artikel-components";
import Footer from "../../../components/global/footer";
import "../../../components/css/artikel.css";

import hg2 from "../../../assets/img/artikel/2024/mastaf/Pelaksanaan upacara .png";
import hg3 from "../../../assets/img/artikel/2024/mastaf/Permainan Bola .png";
import hg5 from "../../../assets/img/artikel/2024/mastaf/Permainan Menuangkan.png";
import hg6 from "../../../assets/img/artikel/2024/mastaf/Senam pagi.jpg";

import img1 from "../../../assets/img/artikel/2024/mastaf/Pelaksanaan Out Bond .jpg";
import Artikel from "../../../content/artikeldoc/2024/mastaf";
import Navbarr from "../../../components/global/navbar";

const Mastaf = () => {
  const article = {
    title: "Mastaf (Masa Taaruf Santri)",
    date: "15 Juli 2024 - 18 Juli 2024 | 07.00 WIB",
    main: "Mastaf (Masa Taaruf Santri) adalah program pembukaan yang diadakan oleh PPM Ar-Rahmat untuk menyambut santri baru SMP maupun SMA. Acara ini menjadi momen pengenalan santri baru dengan lingkungan pondok, Ustaz/Ustazah, Pengurus OPPRA, dan dengan santri baru lainnya.",
    image: img1,
    content: <Artikel />,
    pembuat: "Richardo Valentino",
    ig: "@_richardo_v",
    linkig: "https://www.instagram.com/_richardo_v/",
  };

  const imageData = [
    { src: hg2, content: "Pelaksanaan upacara pembukaan Mastaf 2024" },
    { src: hg6, content: "Senam pagi sebelum PBB (Peraturan Baris Berbaris)" },
    { src: hg3, content: "Permainan Bola Pipa di pos 2" },
    { src: hg5, content: "Permainan Menuangkan Air di pos 5" },
  ];

  return (
    <div>
      <Navbarr />
      <div className="artikel">
        <Artikelcomponent
          title={article.title}
          date={article.date}
          main={article.main}
          image={article.image}
          content={article.content}
          pembuat={article.pembuat}
          ig={article.ig}
          linkig={article.linkig}
        />
        <Gambar images={imageData} />
      </div>
      <Footer />
    </div>
  );
};

export default Mastaf;
