/* import "./NewsFeed.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/newsfeed`);
        setPosts(response.data);
      } catch (error) {
        alert("Error fetching data", error);
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
        {posts?.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id} className="post__body">
            <h3 className="post__title">{post.title}</h3>
            <p className="post__text">{post.content.substring(0, 100)}...</p>
            <p className="post__date">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            <div className="post__tag-container">
              {post.tags.map((tag) => (
                <p className="post__tags" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
}

export default NewsFeed;
 */

import "./NewsFeed.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/newsfeed`);
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
        {posts?.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id} className="post__body">
            <img src={post.image_url} alt={post.title} className="post__image" />
            <div className="post__content">
              <p className="post__tags">{post.category}</p>
              <h3 className="post__title">{post.title}</h3>
              <p className="post__text">{post.content.substring(0, 100)}...</p>
              <p className="post__date">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="post__tag-container">
              {post.tags.map((tag) => (
                <p className="post__tags" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
            <p className="read-more">Read more →</p>
          </Link>
        ))}
      </article>
    </section>
  );
}

export default NewsFeed;
