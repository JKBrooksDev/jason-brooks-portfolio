import { useEffect } from "react";
import "./modal.css";

export default function Modal({ open, onClose, title, children }) {

  // ⭐ Add this useEffect RIGHT HERE
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";   // disable background scroll
      window.scrollTo(0, 0);                   // scroll to top when opened
    } else {
      document.body.style.overflow = "auto";     // re-enable scroll
    }

    // Cleanup in case modal unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
