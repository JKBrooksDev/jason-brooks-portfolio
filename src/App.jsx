import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

// Separate component so useLocation is inside Router
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ThemeToggle />

      <main className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
