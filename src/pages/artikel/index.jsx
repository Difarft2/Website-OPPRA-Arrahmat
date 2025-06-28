import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../home/css/menuArtikel.css";
import cards from "./dataCard.js";
import Footer from "../../components/global/footer.jsx";
import Navbarr from "../../components/global/navbar.jsx";

function MenuEventfull() {
  const [visibleCards, setVisibleCards] = useState(Array(cards.length).fill(false));
  const [searchTerm, setSearchTerm] = useState("");
  const cardRefs = useRef([]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Filter berdasarkan input pencarian
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(card.year).includes(searchTerm) 
  );


  // Kelompokkan berdasarkan tahun
  const groupedByYear = filteredCards.reduce((acc, card) => {
    const year = card.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(card);
    return acc;
  }, {});

  return (
    <div>
      <Navbarr />
      <div className="mev-container">
        <div className="mev-section-title">
          <h2 className="mev-title-text">KEGIATAN</h2>
          <div className="mev-line-container">
            <span className="mev-line-circle"></span>
            <span className="mev-line"></span>
            <span className="mev-line-circle"></span>
          </div>
        </div>

        {/* Input pencarian */}
        <div style={{ marginBottom: "1rem", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Cari kegiatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              width: "80%",
              maxWidth: "400px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Tampilkan hasil */}
        {Object.keys(groupedByYear).length > 0 ? (
          Object.entries(groupedByYear).map(([year, yearCards]) => (
            <div key={year} className="mev-year-group">
              <h3 className="mev-year-title">{year}</h3>
              <div className="mev-content">
                {yearCards.map((card, index) => (
                  <Card
                    key={index}
                    style={{ width: "18rem" }}
                    className={`card-content ${visibleCards[index] ? "visible" : ""}`}
                    ref={(el) => (cardRefs.current[index] = el)}
                  >
                    <Card.Img variant="top" src={card.img} className="card-img" />
                    <Card.Body>
                      <Card.Title className="title-card">{card.title}</Card.Title>
                      <Card.Text className="des-card">{card.text}</Card.Text>
                      <Link to={card.link}>
                        <Button variant="dark">Read More</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>Tidak ada kegiatan ditemukan.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MenuEventfull;
