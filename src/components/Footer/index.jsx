import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-icons">
          <a
            href="https://github.com/JKBrooksDev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jason-brooks-32222539b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Jason Brooks — Built with React
        </p>

      </div>
    </footer>
  );
};

export default Footer;
