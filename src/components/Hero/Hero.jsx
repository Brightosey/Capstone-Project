import "./hero.scss";
import React, { useState, useEffect, useRef } from "react";

function Hero() {
  const images = [
    "https://placecats.com/neo/200/200",
    "https://placecats.com/millie/200/200",
    "https://placecats.com/bella/200/200",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <article className="hero__container">
        <img
          src={images[currentImage]}
          alt="agriculture"
          className="hero__hero-image"
        />
        <div className="hero__hero-overlay">
          <h1 className="hero__hero-title">Bridging Farmers to Market</h1>
          <p className="hero__hero-text">Processing for the future</p>
          <button className="hero__hero-button">Learn More</button>
        </div>
      </article>
    </section>
  );
}

export default Hero;
