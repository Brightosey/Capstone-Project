import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NewsDetail from "./pages/NewsDetail/NewsDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/${post.id}" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
