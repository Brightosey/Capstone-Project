import "./Blog.scss";
import Header from "../../components/Header/Header";
import NewsFeed from "../../components/NewsFeed/NewsFeed";

function Blog() {
  return (
    <>
      <Header />
      <section className="blog">
        <article className=" blog__hero-content">
          <h1 className="blog__hero-title">
            From Farm to Market: <br /> Stories That Matter
          </h1>
          <div className="blog__hero-description">
          <p className=" blog__hero-text">
            Discover real stories and data-driven insights on how agriculture
            and commodity trading shape our world.
          </p>
          </div>
        </article>
        <section className="blog__body">
          <section className="blog__post">
            <NewsFeed />
          </section>
          <aside className="blog__sidebar">
            <h3 className="blog__sidebar-title1">Categories</h3>
            <ul className="blog__sidebar-list1">
              <li className="blog__sidebar-item1">Agriculture</li>
              <li className="blog__sidebar-item1">Commodity Trading</li>
              <li className="blog__sidebar-item1">Food Processing</li>
              <li className="blog__sidebar-item1">Sustainability</li>
            </ul>

            <h3 className="blog__sidebar-title2">Popular Posts</h3>
            <ul className="blog__sidebar-list2">
              <li className="blog__sidebar-item2">
                How to Boost Crop Yield Efficiently
              </li>
              <li className="blog__sidebar-item2">
                The Role of AI in Modern Farming
              </li>
              <li className="blog__sidebar-item2">
                Predicting Commodity Prices: Expert Tips
              </li>
            </ul>
          </aside>
        </section>
      </section>
    </>
  );
}

export default Blog;
