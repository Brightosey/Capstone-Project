import "./About.scss";
import Header from "../../components/Header/Header";
import ceoImage from "../../assets/Images/CEO-image.png";

function About() {
  return (
    <>
      <Header />
      <main className="about">
        <article className="about__hero-content">
          <h1 className="about__hero-title">About Us</h1>
          <div className="about__hero-description">
          <p className="about__hero-text">
            Learn more about our mission, values, and the team that drives us
            forward. Your journey with us starts here.
          </p>
          </div>
        </article>

        <section className="about__content">
          <header className="about__header">
            <h1 className="about__header-title">
              Revolutionizing Agriculture for a Sustainable Future
            </h1>
          </header>

          <section className="about__section">
            <div className="about__section-top-container">
              <p className="about__section-text">
                At Relo Foods Limited, we don’t just farm—we innovate,
                transform, and create lasting impact. In a world where food
                security and sustainability are more critical than ever, we are
                committed to reshaping agriculture through technology,
                efficiency, and forward-thinking solutions.
              </p>
              <figure className="about__section-figure">
                {/* <img src={ceoImage} alt="image" /> */}
              </figure>
            </div>

            <div className="about__purpose">
              <div className="about__mission">
                <h2 className="about__mission-subheading">Mission</h2>
                <p className="about__mission-text">
                  We exist to redefine the agricultural landscape by integrating
                  modern techniques with time-tested practices. Our goal is to
                  not only feed communities but to empower farmers, drive
                  economic growth, and protect the environment.
                </p>
              </div>

              <div className="about__vision">
                <h2 className="about__vision-subheading">Vision</h2>
                <p className="about__vision-text">
                  We envision a future where agriculture is not just about
                  survival, but prosperity—where technology meets tradition,
                  where farmers are entrepreneurs, and where food systems are
                  self-sustaining, scalable, and globally competitive.
                </p>
              </div>
            </div>

            <h2 className="about__subheading">What Sets Us Apart?</h2>
            <div className="about__features">
              <div className="about__feature">
                <h3 className="about__feature-title">Innovation-Driven</h3>
                <p className="about__feature-text">
                  We harness cutting-edge technology—AI-driven analytics, IoT
                  monitoring, and precision farming—to maximize productivity and
                  minimize waste.
                </p>
              </div>

              <div className="about__feature">
                <h3 className="about__feature-title">Sustainability at Our Core</h3>
                <p className="about__feature-text">
                  From regenerative farming to eco-friendly processing, we
                  ensure that every step of our supply chain promotes a
                  healthier planet.
                </p>
              </div>

              <div className="about__feature">
                <h3 className="about__feature-title">Farmer-First Approach</h3>
                <p className="about__feature-text">
                  We don’t just work with farmers—we uplift them. Through
                  training, fair trade partnerships, and resource accessibility,
                  we enable them to thrive.
                </p>
              </div>

              <div className="about__feature">
                <h3 className="about__feature-title">
                  Market Expansion & Global Reach
                </h3>
                <p className="about__feature-text">
                  We bridge the gap between local producers and international
                  markets, unlocking new opportunities for African agricultural
                  products.
                </p>
              </div>
            </div>

            <h2 className="about__subheading">Our Core Areas of Impact</h2>
            <div className="about__core-areas">
              <div className="about__core-area">
                <h3 className="about__core-area-title">Sustainable Farming</h3>
                <p className="about__core-area-text">
                  Building resilient food systems with climate-smart
                  agriculture.
                </p>
              </div>

              <div className="about__core-area">
                <h3 className="about__core-area-title">
                  Food Processing & Value Addition
                </h3>
                <p className="about__core-area-text">
                  Turning raw harvests into premium, market-ready products.
                </p>
              </div>

              <div className="about__core-area">
                <h3 className="about__core-area-title">Agro-Tech Solutions</h3>
                <p className="about__core-area-text">
                  Leveraging AI, blockchain, and IoT for smarter, more efficient
                  farming.
                </p>
              </div>

              <div className="about__core-area">
                <h3 className="about__core-area-title">
                  Commodity Trading & Supply Chain Optimization
                </h3>
                <p className="about__core-area-text">
                  Expanding market access for farmers while ensuring product
                  quality and traceability.
                </p>
              </div>
            </div>

            <div className="about__join-section">
              <h2 className="about__subheading1">Join the Movement</h2>
              <p className="about__text1">
                We are more than an agricultural company—we are a revolution.
                Whether you’re a farmer, investor, or food enthusiast, there’s a
                place for you in our vision. Let’s work together to transform
                agriculture and feed the future.
              </p>
              <p className="about__contact-info">
                📩 Connect with us: [ info@relofoods.com <br /> + (234) 9028545256 ]
              </p>
            </div>
          </section>
        </section>
        <section className="about__team">
          <h2 className="about__team-subheading">
            Meet Our Team
          </h2>
          <p className="about__team-text">
            Our team is the heart of our innovation. With diverse skills and
            backgrounds, we work together to create a sustainable future in
            agriculture.
          </p>

          <div className="about__team-content">
            <div className="about__team-member">
              <div className="about__team-member-image">
                <img
                  src={ceoImage}
                  alt="Team Member Name"
                  className="about__team-member-img"
                />
              </div>
              <div className="about__team-member-info">
                <h3 className="about__team-member-name">Lukman Olaniyan</h3>
                <p className="about__team-member-role">CEO & Founder</p>
                <p className="about__team-member-bio">
                  Lukeman is a visionary in sustainable agriculture and leads our
                  team with a passion for driving innovation and efficiency
                  across the sector.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
