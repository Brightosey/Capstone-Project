import "./Contact.scss";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleMessage(event) {
    setMessage(event.target.value);
  }

  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isMessageValid() {
    return message.length <= 1000;
  }

  function isFormValid() {
    return name && email && isMessageValid() && isEmailValid(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid()) {
      alert("Failed to render message");
      return;
    }

    const newMessage = {
      name: name,
      email: email,
      message: message,
    };

    postMessage(newMessage);
    setName("");
    setEmail("");
    setMessage("");
  }

  const postMessage = async (newMessage) => {
    try {
      await axios.post(`${backendUrl}/messages/${id}`, newMessage);
    } catch (error) {
      alert("Error posting message", error);
    }
  };

  return (
    <>
      <Header />
      <div className="contact">
        <article className=" contact__hero-content">
          <h1 className="contact__hero-title">Contact Us</h1>
          <p className=" contact__hero-text">
            For any product inquiries, assistance, or support.
          </p>
        </article>

        <section className="contact__body-content">
          <div className="contact__body-section">
            <h2 className="contact__body-title">Get in Touch</h2>
            <p className="contact__body-text">
              Have questions or want to partner with us? Reach out and let’s
              work together! We welcome your inquiries, feedback, and
              collaboration opportunities. Feel free to reach out to us through
              any of the following contact methods:
            </p>
          </div>
          <div className="contact__body-container">
            {/* Location Card */}
            <div className="contact__location">
              <div className="contact__location-container">
                <img
                  className="contact__location-icon"
                  src={null}
                  alt="Location Icon"
                />
              </div>
              <h3 className="contact__location-title">Locations</h3>
              <p className="contact__location-text">
                Alagomeji Yaba Lagos, Nigeria
              </p>
            </div>

            {/* Email Card */}
            <div className="contact__email">
              <div className="contact__email-container">
                <img
                  className="contact__email-icon"
                  src={null}
                  alt="Email Icon"
                />
              </div>
              <h3 className="contact__email-title">Email Address</h3>
              <p className="contact__email-text">info@relofoods.com</p>
              <p className="contact__email-text">www.relofoods.com</p>
            </div>

            {/* Phone Number Card */}
            <div className="contact__phone">
              <div className="contact__phone-container">
                <img
                  className="contact__phone-icon"
                  src={null}
                  alt="Phone Icon"
                />
              </div>
              <h3 className="contact__phone-title">Phone Number</h3>
              <p className="contact__phone-text">+ (234) 9028545256</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className=" contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              placeholder="Your Name"
              className="contact__input"
              required
            />
            <input
              type="email"
              name="name"
              value={email}
              onChange={handleEmail}
              placeholder="Your Email"
              className="contact__input"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleMessage}
              className="contact__textarea"
              required
            ></textarea>
            <button type="submit" className="contact__button">
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="contact__map">
            <iframe
              title="Administrative Office"
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
    </>
  );
}

export default Contact;
