import "./style.css";
import { contactConfig } from "../../data/content";

export default function Contact() {
  return (
    <section className="contact" data-aos="fade-up">

      <h1 className="page-title">Contact Me</h1>

      <p className="contact-description">{contactConfig.description}</p>

      <div className="contact-info">
        <p><strong>Email:</strong> {contactConfig.YOUR_EMAIL}</p>
        <p><strong>Phone:</strong> {contactConfig.YOUR_FONE}</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
