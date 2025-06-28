import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import Footer from "../../components/global/footer";
import Navbarr from "../../components/global/navbar";

import edisi1 from "../../assets/img/coverartimes/arttimes1-01-wnfysc5eSMpUk5lgGxmh3Q.png";
import edisi2 from "../../assets/img/coverartimes/arttimes2-01-Ta9bUSRbppC9pqpdL-9MPg.png";
import edisi3 from "../../assets/img/coverartimes/ArtTimes3rded.-01-Xmf_RqpOkiyQq7GCMvxDTw.png";
import edisi4 from "../../assets/img/coverartimes/Arttimes4-01-piZqDVkxpn7VpyiCZYYVMQ.png";
import edisi5 from "../../assets/img/coverartimes/ArtTimes5isDONE1-01-dPnFJQ0UTV4ht5R7Q-WGnA.png";
import edisi6 from "../../assets/img/coverartimes/ArtTimes6-01-mKyrbizKqAiC8G1wdSnE_g.png";
import edisi7 from "../../assets/img/coverartimes/arttimes7Fullcom-01-CWa-fScq-ja0VG2x9BNmYg.png";
import edisi8 from "../../assets/img/coverartimes/Screenshot_27-4-2025_72738_-3Cv4WpbYI7g0GjoGQ7gnuQ.jpeg";

const magazines = [
  { edisi: "Edisi 1", image: edisi1, link: "https://drive.google.com/file/u/0/d/1c7faHlGrp6MPwYhexxMqrQY3uMYkg1_L/view?usp=drive_link&pli=1" },
  { edisi: "Edisi 2", image: edisi2, link: "https://drive.google.com/file/d/1qpl7HBNIQf4syvQTkbn_DFbgIBolRSVR/view" },
  { edisi: "Edisi 3", image: edisi3, link: "https://drive.google.com/file/d/1w813MtdDjc3ObFfSjyL39nm7sXkpNo2j/view" },
  { edisi: "Edisi 4", image: edisi4, link: "https://drive.google.com/file/d/1_6Hq82zUJKdkhVgAhEkZXsDHRKsx-fbj/view" },
  { edisi: "Edisi 5", image: edisi5, link: "https://drive.google.com/file/d/1PKTuBIbluB8ii7oGCxZTGiHswrW2HYK7/view" },
  { edisi: "Edisi 6", image: edisi6, link: "https://drive.google.com/file/d/16Yt3mNB1dqU51goQ1V1hwW_2M8115soL/view" },
  { edisi: "Edisi 7", image: edisi7, link: "https://drive.google.com/file/d/1iwhx2LxINyIvTsJ3JwZCWfBjd-gBVJSW/view" },
  { edisi: "Edisi 8", image: edisi8, link: "https://drive.google.com/file/d/1FCqQ62LmpJArRPYFWNwceEhyhij49VOX/view" },
];

const ArttimesList = () => {
  return (
    <div>
      <Navbarr />
      <section className="arttimes-list-section">
        <div className="arttimes-list-container">
          {magazines.map((item, index) => (
            <motion.div
              className="arttimes-card"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={item.image}
                alt={item.edisi}
                className="arttimes-card-img"
              />
              <h4 className="arttimes-card-title">{item.edisi}</h4>
              <a
                href={item.link}
                className="arttimes-read-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                BACA
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArttimesList;
 