import Artikelcomponent from "../../../components/global/artikel-components";
import { Gambar } from "../../../components/global/artikel-components";
import Footer from "../../../components/global/footer";
import "../../../components/css/artikel.css";

import hg2 from "../../../assets/img/artikel/2024/hariguru/penandatanganan simbolis SMA.jpg";
import hg3 from "../../../assets/img/artikel/2024/hariguru/penandatanganan simbolis SMP.jpg";
import hg5 from "../../../assets/img/artikel/2024/hariguru/penyampaian pesan dan kesan .jpg";
import hg6 from "../../../assets/img/artikel/2024/hariguru/Penyampaian.jpg";

import img1 from "../../../assets/img/artikel/2024/hariguru/hariguru.svg";
import Artikel from "../../../content/artikeldoc/2024/hariguru";
import Navbarr from "../../../components/global/navbar";

const Hariguru = () => {
  const article = {
    title: "PERINGATAN HARI GURU NASIONAL",
    date: "25 November 2024 | 07.00 WIB",
    main: "Pada 25 November 2024, Pondok Pesantren Ar-Rahmat mengadakan upacara Hari Guru Nasional yang diisi dengan drama kejutan, lagu, dan penandatanganan bingkai sebagai penghargaan untuk guru.",
    image: img1,
    content: <Artikel />,
    pembuat: "M. Faiz Alif Yulistiawan",
    ig: "@fay_368",
    linkig:
      "https://www.instagram.com/fay_368?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  };

  const imageData = [
    {
      src: hg2,
      content:
        "Penandatanganan simbolis hari guru oleh kepala sekolah SMA Plus Ar-Rahmat",
    },
    {
      src: hg3,
      content:
        "Penandatanganan simbolis hari guru oleh kepala sekolah SMP Plus Ar-Rahmat",
    },
    {
      src: hg5,
      content:
        "Penyampaian pesan dan kesan oleh perwakilan dewan guru SMP-SMA Plus Ar-Rahmat",
    },
    { src: hg6, content: "Penyampaian amanat oleh Pembina pacara" },
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

export default Hariguru;
