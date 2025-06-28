import "../css/navbar.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo OPPRA.svg";

const Navbarr = () => {
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide navbar saat scroll
      if (currentY > lastScrollY.current) {
        controls.start({ y: "-100%", opacity: 0 });
      } else {
        controls.start({ y: "0%", opacity: 1 });
      }
      lastScrollY.current = currentY;

      // Ubah transparansi berdasarkan scroll
      setIsTransparent(currentY < window.innerHeight * 0.8); // ganti sesuai tinggi hero kamu
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0, opacity: 1 }}
      className={`nav-container ${isTransparent ? "transparent" : "colored"}`}
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="OPPRA" className="logo-navbar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto links-nav">
              <Nav.Link as={Link} to="/" className="navlink">BERANDA</Nav.Link>
              <Nav.Link as={Link} to="/masabakti" className="navlink">MASA BAKTI</Nav.Link>
              <Nav.Link as={Link} to="/artikel" className="navlink">ARTIKEL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navbarr;
