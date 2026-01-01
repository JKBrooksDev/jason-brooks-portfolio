import "./style.css";
import { contactConfig } from "../../data/content";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kafg984",     // Your Service ID
        "template_3vgubsh",    // Your Template ID
        formData,
        "TnaIhpp6uamglw2VY"    // Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" data-aos="fade-up">
      <h1 className="page-title">Contact Me</h1>

      <p className="contact-description">{contactConfig.description}</p>

      <div className="contact-info">
        <p><strong>Email:</strong> {contactConfig.YOUR_EMAIL}</p>
        <p><strong>Phone:</strong> {contactConfig.YOUR_FONE}</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          autoComplete="off"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
