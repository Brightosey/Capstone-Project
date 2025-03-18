import "./HomePage.scss";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import coffeeBeansMain from "../../assets/Images/Coffee-beans-main.png";
import coffeeBeansSub from "../../assets/Images/Coffee-beans-sub.png";
import maizeMain from "../../assets/Images/Maize-main.png";
import maizeSub from "../../assets/Images/Maize-sub.png";
import soyBeansMain from "../../assets/Images/Soy-beans-main.png";
import soyBeansSub from "../../assets/Images/Soy-beans-sub.png";
import pepperMain from "../../assets/Images/pepper-main.png";
import pepperSub from "../../assets/Images/pepper-sub.png";
import reloFoodsLogo from "../../assets/Logo/ReloFoods2-logo.png";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import foodProcessing from "../../assets/Images/foodProcessing.png";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <section className="home">
        {/* About us */}
        <article className="home__about">
          <h2 className="home__about-title">About Us</h2>
          <p className="home__about-text">
            We specialize in food processing and commodity trading, ensuring
            quality products reach the market efficiently.
          </p>
          <button className="home__about-button">Read more</button>
        </article>

        {/*  Services */}
        <article className="home__services">
          <h2 className="home__services-title">Our Services</h2>
        {/*   <div className="home__services-list">
            <div className="home__services-item">
              <div className="home__services-container">
                <img className="home__services-image" src={foodProcessing} alt="foodProcessing" />
                <p className="home__services-text">Food Processing</p>
              </div>
              <div className="home__services-container">
                <img className="home__services-image" src={foodProcessing} alt="foodProcessing" />
                <p className="home__services-text">Direct Product Sourcing</p>
              </div>
              <div className="home__services-container">
                <img className="home__services-image" src={foodProcessing} alt="foodProcessing" />
                <p className="home__services-text">Food Product Logistic</p>
              </div>
            </div>
          </div> */}
        </article>

        {/* Products */}
        <article className="home__products">
          <h2 className="home__products-title">Featured Products</h2>
          <div className="home__products-list">
            {/* Maize */}
            <div className="home__products-item">
              <div className="home__products-image-box">
                <img
                  className="home__products-image-main"
                  src={maizeMain}
                  alt="Maize"
                />
                <img
                  className="home__products-image-overlay"
                  src={maizeSub}
                  alt="Maize Close-up"
                />
                <img
                  className="home__products-logo"
                  src={reloFoodsLogo}
                  alt="Relo Foods Logo"
                />
              </div>
              <p className="home__products-name">Maize</p>
            </div>

            {/* Soybeans */}
            <div className="home__products-item">
              <div className="home__products-image-box">
                <img
                  className="home__products-image-main"
                  src={soyBeansMain}
                  alt="Soybeans"
                />
                <img
                  className="home__products-image-overlay"
                  src={soyBeansSub}
                  alt="Soybeans Close-up"
                />
                <img
                  className="home__products-logo"
                  src={reloFoodsLogo}
                  alt="Relo Foods Logo"
                />
              </div>
              <p className="home__products-name">Soybeans</p>
            </div>

            {/* Coffee Beans */}
            <div className="home__products-item">
              <div className="home__products-image-box">
                <img
                  className="home__products-image-main"
                  src={coffeeBeansMain}
                  alt="Coffee Beans"
                />
                <img
                  className="home__products-image-overlay"
                  src={coffeeBeansSub}
                  alt="Coffee Beans Close-up"
                />
                <img
                  className="home__products-logo"
                  src={reloFoodsLogo}
                  alt="Relo Foods Logo"
                />
              </div>
              <p className="home__products-name">Coffee Beans</p>
            </div>

            <div className="home__products-item">
              <div className="home__products-image-box">
                <img
                  className="home__products-image-main"
                  src={pepperMain}
                  alt="Coffee Beans"
                />
                <img
                  className="home__products-image-overlay"
                  src={pepperSub}
                  alt="Coffee Beans Close-up"
                />
                <img
                  className="home__products-logo"
                  src={reloFoodsLogo}
                  alt="Relo Foods Logo"
                />
              </div>
              <p className="home__products-name">Pepper</p>
            </div>
          </div>
        </article>

        {/* contact us */}
        <article className="home__contact">
          <h2 className="home__contact-title">Get in Touch</h2>
          <p className="home__contact-text">
            Have questions or want to partner with us? Reach out and let’s work
            together to build a sustainable future.
          </p>
          <button className="home__contact-button">Contact Us</button>
        </article>
        <article>
          <NewsFeed />
        </article>
      </section>
    </>
  );
}

export default HomePage;
