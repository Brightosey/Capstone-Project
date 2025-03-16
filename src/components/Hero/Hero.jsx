import "./hero.scss";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Hero() {

  const [currentIndex, setcurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if(slides.length === 0) return;

    const interval = setInterval(() => {
      setcurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        console.log(backendUrl);
        const response = await axios.get(`${backendUrl}/slides`);
        setSlides(response.data);
      } catch (error) {
        alert("Error fetching data", error);
        console.log(error);
      }
    };
    fetchSlides();
  }, [])

  return (
    <section className="hero">
      <article className="hero__container">
        {slides.length > 0 && (
          <>
            <img
              src={slides[currentIndex].image}
              alt="agriculture"
              className="hero__hero-image"
            />
            <div className="hero__hero-overlay">
              <h1 className="hero__hero-title">{slides[currentIndex].title}</h1>
              <h2 className="hero__hero-title2">
                {slides[currentIndex].company}
              </h2>
              <p className="hero__hero-text">{slides[currentIndex].text}</p>
              <Link
                to={slides[currentIndex].buttonLink}
                className="hero__hero-button"
              >
                {slides[currentIndex].buttonText}
              </Link>
            </div>
          </>
        )}
      </article>
    </section>
  );
}

export default Hero;
