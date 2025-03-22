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
import agroImage from "../../assets/Images/agro-image.png";
import foodProcessing from "../../assets/Icons/food-processing.png";
import logistics from "../../assets/Icons/logistics.png";
import sourcing from "../../assets/Icons/sourcing.png";


function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <section className="home">
        <article className="home__about">
            <div className="home__about-header">
              <img
                src={reloFoodsLogo}
                alt="Agri-Icon"
                className="home__about-icon"
              />
              <h3 className="home__about-subtitle">Welcome to</h3>
            </div>
            <h1 className="home__about-title">Relo Foods Limited</h1>
            <p className="home__about-text">
              At Relo Foods, we are dedicated to redefining the landscape of
              agricultural processing and commodity trading. Our commitment to
              sustainability, quality, and efficiency sets us apart as we bring
              premium food products to consumers and businesses alike. From farm
              to table, we ensure every step meets the highest standards.
            </p>
          <div className="home__about-image">
            <img
              src={agroImage}
              alt="Agricultural Produce"
              className="home__about-img"
            />
          </div>
        </article>

        {/*  Services */}
        <article className="home__services">
          <h2 className="home__services-title">Our Services</h2>
            <div className="home__services-item">
              <div className="home__services-container">
                <img className="home__services-image" src={foodProcessing} alt="foodProcessing" />
                <p className="home__services-text">Food Processing</p>
              </div>
              <div className="home__services-container">
                <img className="home__services-image" src={sourcing } alt="foodProcessing" />
                <p className="home__services-text">Direct Product Sourcing</p>
              </div>
              <div className="home__services-container">
                <img className="home__services-image"  src={logistics }   alt="foodProcessing" />
                <p className="home__services-text">Food Product Logistic</p>
              </div>
            </div>
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
          <h2 className="home__contact-title">What We Deliver</h2>
          <p className="home__contact-text">
            At Relo Foods Limited, we specialize in both commodity trading and
            food processing, delivering exceptional quality, innovation, and
            personalized service. Our commitment to excellence ensures we
            provide unparalleled value and meet the unique needs of our
            customers every step of the way.
          </p>
        </article>
        <article className="newsfeed">
          <NewsFeed autoSlide={true} />
        </article>
      </section>
    </>
  );
}

export default HomePage;
