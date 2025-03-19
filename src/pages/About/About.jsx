import "./About.scss";
import Header from "../../components/Header/Header";

function About() {
  return (
    <>
    <Header />
    <main className="about">
      <article className="about__hero-content">
        <h1 className="about__hero-title">About Us</h1>
        <p className="about__hero-text">
        Learn more about our mission, values, and the team that drives us forward. Your journey with us starts here.
        </p>
      </article>

      <article className="about__mission">
        <h2 className="about__title">Our Mission</h2>
        <p className="about__text">
          We aim to revolutionize the food industry by ensuring quality,
          affordability, and sustainability in every product we deliver.
        </p>
      </article>

      <article className="about__vision">
        <h2 className="about__title">Our Vision</h2>
        <p className="about__text">
          {" "}
          We aim to revolutionize the food industry by ensuring quality,
          affordability, and sustainability in every product we deliver.
        </p>
      </article>

      <article className="home__section home__why-choose">
          <h2 className="home__section-title">Why Choose Us</h2>
          <ul home__why-choose-list>
            <li className="home__why-choose-item">High-quality processing</li>
            <li className="home__why-choose-item">Sustainable sourcing</li>
            <li className="home__why-choose-item">Reliable supply chain</li>
            <li className="home__why-choose-item">Competitive pricing</li>
          </ul>
        </article>

      <article className="about__values">
        <h2>Our Values</h2>
        <div className="about__values-container">
          <div className="about__value">
            <h3>Quality</h3>
            <p>We source and produce only the finest food products.</p>
          </div>
          <div className="about__value">
            <h3>Sustainability</h3>
            <p>We are committed to eco-friendly and ethical sourcing.</p>
          </div>
          <div className="about__value">
            <h3>Customer First</h3>
            <p>Your satisfaction is our priority.</p>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}

export default About;
