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
            href="https://www.linkedin.com/in/jason-kenneth-brooks-32222539b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BJotxE4%2FT9CqgngKB4nDNg%3D%3D"
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
