import "./NewsDetail.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import reloFoodsLogo from "../../assets/Logo/ReloFoods-logo.svg";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function NewsDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(`${backendUrl}/newsfeed/${id}`);
        setPost(response.data);
      } catch (error) {
        alert("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No post found!</div>;
  }

  function formatDetailText(text) {
    // Split the text into sections based on double new lines for paragraphs
    const sections = text.split(/\n\n+/).map((section, index) => {
      // Handle bullet points (- item) and numbered lists (1. item)
      if (/^(\d+\.\s|\-\s)/m.test(section)) {
        const lines = section.split("\n");
        const isOrdered = /^\d+\.\s/.test(lines[0]);
        return isOrdered ? (
          <ol key={index}>
            {lines.map((line, i) => (
              <li key={i}>{line.replace(/^\d+\.\s/, "").trim()}</li>
            ))}
          </ol>
        ) : (
          <ul key={index}>
            {lines.map((line, i) => (
              <li key={i}>{line.replace(/^\-\s/, "").trim()}</li>
            ))}
          </ul>
        );
      }
      // Handle bold text (**bold**) using JSX spans
      const formattedText = section.split(/(\*\*.*?\*\*)/).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return <p key={index}>{formattedText}</p>;
    });
    return sections;
  }

  return (
    <section className="detail-page">
      <article className="detail-page__header">
        <Link to="/" className="detail-page__logo-link">
          <img
            src={reloFoodsLogo}
            alt="reloFoodsLogo"
            className="detail-page__logo"
          />
        </Link>
        <Link to="/" className="detail-page__back-link">
          <ArrowLeft />
          Home
        </Link>
      </article>

      <section className="detail-page__content">
        <div className="detail-page__image-container">
          <img src={post.image_url} alt="image" />
        </div>
        <div className="detail-page__detail-container">
          <h1 className="detail-page__title">{post.title}</h1>
          <p className="detail-page__text">{formatDetailText(post.detail)}</p>
        </div>
        <div className="detail-page__source-container">
          <ul className="detail-page__source-list">
            {post.sources.map((source, index) => (
              <li key={index} className="detail-page__source-item">
                <p className="detail-page__source-name">{source.name}</p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-page__source-url"
                >
                  Visit Source
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default NewsDetail;
