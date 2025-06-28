import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./css/menubakti.css";

import bakti1 from "../../assets/img/masabakti/2024-2025/MainPhoto.svg";

const menuItems = [
  {
    title: "2024-2025",
    image: bakti1,
    link: "/masabakti/2024-2025",
  },
  // {
  //   title: "2023-2024",
  //   image: bakti1,
  //   link: "/masabakti/2023-2024",
  // },
];

const MenuBakti = () => {
  const [visibleCards, setVisibleCards] = useState(
    Array(menuItems.length).fill(false)
  );
  const cardRefs = useRef([]);

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

    const refsSnapshot = cardRefs.current.slice();
    refsSnapshot.forEach((ref) => ref && observer.observe(ref));
    return () => refsSnapshot.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <div>
      <section className="mb-section" id="menuBakti">
        <div className="mb-content">
          <div className="mb-section-title">
            <h2 className="mb-title-text">Masa Bakti</h2>
            <div className="line-container">
              <span className="line-circle"></span>
              <span className="line"></span>
              <span className="line-circle"></span>
            </div>
          </div>

          <div className="mev-content d-flex flex-wrap justify-content-center gap-4 p-3">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                style={{ width: "18rem" }}
                className={`bakti-card ${visibleCards[index] ? "visible" : ""}`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="bakti-card-img"
                />
                <Card.Body>
                  <Card.Title className="bakti-card-title">
                    {item.title}
                  </Card.Title>
                  <Link to={item.link}>
                    <Button className="bakti-btn">Lihat Selengkapnya</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuBakti;
