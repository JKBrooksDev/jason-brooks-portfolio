import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">{`{JKB}`}</div>

        {/* ⭐ Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </button>

        {/* ⭐ Nav Menu */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/photos" onClick={() => setMenuOpen(false)}>Photos</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
