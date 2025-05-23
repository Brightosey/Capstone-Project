import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import ScrollTopButton from "./Hook/ScrollTopButton/ScrollTopButton";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<NewsDetail />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </BrowserRouter>
  );
}

export default App;
