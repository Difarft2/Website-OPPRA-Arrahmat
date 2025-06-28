import Artikelcomponent from "../../../components/global/artikel-components";
import { Gambar } from "../../../components/global/artikel-components";
import Footer from "../../../components/global/footer";
import "../../../components/css/artikel.css";

import hg2 from "../../../assets/img/artikel/2024/mufest/img2.jpg";
import hg3 from "../../../assets/img/artikel/2024/mufest/img3.jpg";
import hg5 from "../../../assets/img/artikel/2024/mufest/img4.jpg";
import hg6 from "../../../assets/img/artikel/2024/mufest/img5.jpg";

import img1 from "../../../assets/img/artikel/2024/mufest/img1.jpg";
import Artikel from "../../../content/artikeldoc/2024/mufest";
import Navbarr from "../../../components/global/navbar";

const Mufes = () => {
  const article = {
    title: "MUFEST (Muharram Festival)",
    date: "25 Juli-18 Agustus | 17.30 WIB",
    main: "Bojonegoro, 25 Juli 2024. Dalam rangka memperingati Muharram 1446 H, Organisasi Pelajar Pondok Pesantren Ar-Rahmat (OPPRA) mengadakan event spesial yang selalu ditunggu-tunggu oleh para santri setiap tahun, yang bernama “MUFEST”.",
    image: img1,
    content: <Artikel />,
    pembuat: "Giannini Valentino",
    ig: "@gianinni_v",
    linkig: "https://www.instagram.com/gianinni_v/",
  };

  const imageData = [
    { src: hg2, content: "Perlombaan Adzan" },
    { src: hg6, content: "Perlombaan Pidato" },
    { src: hg5, content: "Pembacaan ayat suci Al-Quran" },
    { src: hg3, content: "Perlombaan Cerdas Cermat PAI" },
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

export default Mufes;
