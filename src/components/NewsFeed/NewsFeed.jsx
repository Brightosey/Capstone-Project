import "./NewsFeed.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function NewsFeed({ autoSlide = false }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || posts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoSlide, posts.length]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/newsfeed`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="post">
      <h2 className="post__header">Latest News</h2>
      <article className="post__container">
        {autoSlide ? (
          <Link to={`/post/${posts[currentIndex].id}`} key={posts[currentIndex].id} className="post__home">
            <img
              src={posts[currentIndex].image_url}
              alt={posts[currentIndex].title}
              className="post__home-image"
            />
            <div className="post__home-content">
              <p className="post__home-tags">{posts[currentIndex].category}</p>
              <h3 className="post__home-title">{posts[currentIndex].title}</h3>
              <p className="post__home-text">{posts[currentIndex].content.substring(0, 100)}...</p>
              <p className="post__home-date">
                {new Date(posts[currentIndex].created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="post__home-tag-container">
              {posts[currentIndex].tags.map((tag) => (
                <p className="post__home-tags" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
            <p className="read-more1">Read more →</p>
          </Link>
        ) : (
          posts?.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} className="post__body">
              <img
                src={post.image_url}
                alt={post.title}
                className="post__image"
              />
              <div className="post__content">
                <p className="post__tags">{post.category}</p>
                <h3 className="post__title">{post.title}</h3>
                <p className="post__text">
                  {post.content.substring(0, 100)}...
                </p>
                <p className="post__date">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
              <p className="read-more">Read more →</p>
            </Link>
          ))
        )}
      </article>
    </section>
  );
}

export default NewsFeed;
