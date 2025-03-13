import "./About.scss";

function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <article className="about__hero-content">
          <h1 className="about__hero-title">About ReloFoods</h1>
          <p className="about__hero-">
            {" "}
            At ReloFoods, we are passionate about delivering high-quality,
            nutritious, and sustainable food products. Our goal is to bring the
            best of food processing and commodity trading to your table.
          </p>
        </article>

        <article className="about__mission">
          <h2 className="about__title">Our Mission</h2>
          <p className="about__text">
            {" "}
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
      </section>
    </main>
  );
}

export default About;
