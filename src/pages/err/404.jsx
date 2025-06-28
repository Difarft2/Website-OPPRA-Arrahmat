import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import './404.css';

import errorImage from "../../assets/logo/404.png";
import Navbarr from "../../components/global/navbar";
import Footer from "../../components/global/footer";

const Error404 = () => {
  return (
    <>
    <Navbarr/>
      <Container className="error-container text-center d-flex flex-column justify-content-center align-items-center">
        <Image src={errorImage} alt="404 Error" className="error-image mb-4" fluid />
        <h1 className="fw-bold text-danger">Oops! Halaman Tidak Ditemukan</h1>
        <p className="text-muted mb-4">
          Maaf, halaman yang kamu cari tidak tersedia, sudah dihapus, atau URL-nya salah.
        </p>
        <Link to="/">
          <Button variant="primary">Kembali ke Beranda</Button>
        </Link>
      </Container>
      <Footer/>
    </>
  );
};

export default Error404;
