import "./css/hero.css";
import { motion } from "framer-motion";

const text = "ORGANISASI PELAJAR PONDOK PESANTREN MODERN AR RAHMAT";

const Hero = () => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: words.length * 0.15 + 0.2, // muncul setelah semua kata di atas
      },
    },
  };

  return (
    <div>
      <div className="header-section">
        <div className="header-container">
          <h1 className="header-title">OPPRA AR - RAHMAT</h1>

          <motion.h3
            className="header-subtitle"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h3>

          <motion.p
            className="header-description"
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
          >
            SELAMAT DATANG DI WEBSITE OPPRA
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
