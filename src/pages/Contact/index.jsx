import "./style.css";
import { useEffect } from "react";
import headshot from "../../assets/jason.jpg";
import resumePDF from "../../assets/JasonBrooksResume.pdf";

export default function Contact() {

  // ---------------------------------------------------
  // JavaScript vCard Generator (iPhone + Android safe)
  // ---------------------------------------------------
  function downloadVCard() {
    const vcard =
      "BEGIN:VCARD\r\n" +
      "VERSION:3.0\r\n" +
      "FN:Jason Brooks\r\n" +
      "N:Brooks;Jason;;;\r\n" +
      "TITLE:Fullstack Developer\r\n" +
      "TEL;TYPE=CELL:8653523318\r\n" +
      "EMAIL:jasonbrooks1127@gmail.com\r\n" +
      "URL:https://jason-brooks-portfolio.vercel.app\r\n" +
      "item1.URL:https://linkedin.com/in/jason-brooks-32222539b\r\n" +
      "item1.X-ABLabel:LinkedIn\r\n" +
      "item2.URL:https://github.com/JKBrooksDev\r\n" +
      "item2.X-ABLabel:GitHub\r\n" +
      "END:VCARD\r\n";

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "JasonBrooks.vcf";
    a.click();

    URL.revokeObjectURL(url);
  }

  // ---------------------------------------------------
  // Auto-run vCard when QR code loads ?add=true
  // ---------------------------------------------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("add") === "true") {
      downloadVCard();
    }
  }, []);

  // ---------------------------------------------------
  // QR Code Generator (points to ?add=true)
  // ---------------------------------------------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
    script.onload = generateQR;
    document.body.appendChild(script);

    function generateQR() {
      new window.QRCode(document.getElementById("qrcode"), {
        text: window.location.origin + "/contact?add=true",
        width: 150,
        height: 150,
        colorDark: "#0f1c2e",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.H,
      });
    }
  }, []);

  return (
    <div className="contact-page-wrapper">
      <div className="card">

        {/* HEADER */}
        <div className="card-header">
          <div className="profile-image">
            <img src={headshot} alt="Jason Brooks Headshot" />
          </div>

          <h1 className="name">Jason Brooks</h1>
          <p className="title">Fullstack Developer</p>
        </div>

        {/* CONTACT ITEMS */}
        <div className="card-body">

          <a href="tel:+18653523318" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-label">Phone</p>
              <p className="contact-value">(865) 352-3318</p>
            </div>
          </a>

          <a href="mailto:jasonbrooks1127@gmail.com" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-label">Email</p>
              <p className="contact-value">jasonbrooks1127@gmail.com</p>
            </div>
          </a>

          <a href="https://jason-brooks-portfolio.vercel.app" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 3.84L20.93 19H3.07L12 5.84z"/>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-label">Portfolio</p>
              <p className="contact-value">View Website</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/jason-brooks-32222539b/" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6.94 6.5c0 .97-.78 1.75-1.75 1.75S3.44 7.47 3.44 6.5 4.22 4.75 5.19 4.75s1.75.78 1.75 1.75zM4 8.75h2.38V20H4V8.75zm5.06 0h2.28v1.53h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.68V20h-2.38v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V20H9.06V8.75z"/>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-label">LinkedIn</p>
              <p className="contact-value">Connect</p>
            </div>
          </a>

          <a href="https://github.com/JKBrooksDev" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-label">GitHub</p>
              <p className="contact-value">JKBrooksDev</p>
            </div>
          </a>

        </div>

        {/* QR + BUTTONS */}
        <div className="qr-section">
          <p className="qr-title">Scan to Add Contact</p>
          <div id="qrcode"></div>

          <button className="save-btn" onClick={downloadVCard}>
            Add to Contacts
          </button>

          <a href={resumePDF} className="resume-btn" download>
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}
