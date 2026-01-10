import { useEffect } from "react";

export default function ContactRedirect() {
  useEffect(() => {
    window.location.href = "/contact-card.html";
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center", color: "#1a365d" }}>
      Redirecting to contact card…
    </div>
  );
}
