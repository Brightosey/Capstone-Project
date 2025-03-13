import "./HomePage.scss";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";

function HomePage() {
  return (
    <>
    <Hero />
    <section className="home">
      {/* About us */}
      <article className="home__section home__about">
        <h2 className="home__section-title">About Us</h2>
        <p className="home__section-text">
          We specialize in food processing and commodity trading, ensuring
          quality products reach the market efficiently.
        </p>
        <button className="home__section-button">Read more</button>
      </article>

      {/*  Services */}
      <article className="home__section home__services">
        <h2 className="home__section-title">Our Services</h2>
        <div className="home__section-list">
          <div className="home__services-item">Food Processing</div>
          <div className="home__services-item">Commodity Trading</div>
          <div className="home__services-item">Supply Chain & Logistics</div>
        </div>
      </article>

      {/* Products */}
      <article className="home__section home__products">
        <h2 className="home__section-title">Featured Products</h2>
        <div className="home__section-list">
          <div className="home__products-item">Product 1</div>
          <div className="home__products-item">Product 2</div>
          <div className="home__products-item">Product 3</div>
        </div>
      </article>

      {/*   why choose us */}
      <article className="home__section home__why-choose">
        <h2 className="home__section-title">Why Choose Us</h2>
        <ul home__why-choose-list>
          <li className="home__why-choose-item">High-quality processing</li>
          <li className="home__why-choose-item">Sustainable sourcing</li>
          <li className="home__why-choose-item">Reliable supply chain</li>
          <li className="home__why-choose-item">Competitive pricing</li>
        </ul>
      </article>

      {/* contact us */}
      <article className="home__section home__contact">
        <h2 className="home__section-title">Get in Touch</h2>
        <p className="home__section-text">
          Have questions or want to partner with us? Reach out and let’s work
          together to build a sustainable future.
        </p>
        <button className="home__section-button">Contact Us</button>
      </article>
    </section>
    </>
  );
}

export default HomePage;
