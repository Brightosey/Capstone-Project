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
          <img src={ArrowLeft} alt="back" />
          Home
        </Link>
      </article>

      <section className="detail-page__content">
        <div className="detail-page__image-container">
          <img src={post.image_url} alt="image" />
        </div>
        <div className="detail-page__detail-container">
          <h1 className="detail-page__title">{post.title}</h1>
          <p className="detail-page__text">{post.detail}</p>
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
