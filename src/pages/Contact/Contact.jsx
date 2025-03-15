import "./Contact.scss";

import "./Contact.scss";
import Hero from "../../components/Hero/Hero";

function Contact() {
  return (
    <div className="contact">
      <article className="/* contact__section */ contact__hero-content">
        <h1 className="contact__title">Contact ReloFoods</h1>
        <p className="contact__text contact__text--hero">
          {" "}
          At ReloFoods, we are passionate about delivering high-quality,
          nutritious, and sustainable food products. Our goal is to bring the
          best of food processing and commodity trading to your table.
        </p>
      </article>

      <section className="contact__content">
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__text">
          Have questions or want to partner with us? Reach out and let’s work
          together!
        </p>

        {/* Contact Form */}
        <form className="/* contact__section */ contact__form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact__input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact__input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact__textarea"
            required
          ></textarea>
          <button type="submit" className="contact__button">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact__section contact__info">
          <p className="contact__info-item">
            📍 Address: 123 Main St, City, Country
          </p>
          <p className="contact__info-item">📞 Phone: +1 234 567 890</p>
          <p className="contact__info-item">
            ✉️ Email: contact@yourbusiness.com
          </p>
        </div>

        {/* Google Map */}
        <div className="contact__map">
          <iframe
            title="Business Location"
            src="https://www.google.com/maps?q=6.5244,3.3792&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className="/* contact__section */ contact__social">
          <a
            href="https://facebook.com"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
