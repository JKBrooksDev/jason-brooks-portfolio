import { useState } from "react";
import Modal from "../Modal/Modal";
import "./style.css";

export default function PhotoCard({ photo }) {
  const [open, setOpen] = useState(false);

  // Zoom + Pan State
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  // Scroll wheel zoom (desktop)
  const handleWheel = (e) => {
    e.preventDefault();

    const zoomIntensity = 0.1;
    const newScale = scale + (e.deltaY < 0 ? zoomIntensity : -zoomIntensity);

    if (newScale >= 1 && newScale <= 4) {
      setScale(newScale);
    }
  };

  // Mouse drag start
  const handleMouseDown = (e) => {
    setDragging(true);
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  // Mouse drag move
  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  // Mouse drag end
  const handleMouseUp = () => {
    setDragging(false);
  };

  // Touch drag start
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  // Touch drag move
  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - start.x,
      y: touch.clientY - start.y,
    });
  };

  // Touch drag end
  const handleTouchEnd = () => {
    setDragging(false);
  };

  return (
    <>
      <div className="photo-card" data-aos="zoom-in">
        <img src={photo.img} alt={photo.description} />

        <div className="photo-info">
          <p>{photo.description}</p>

          <button className="photo-btn" onClick={() => setOpen(true)}>
            View Full Image
          </button>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Photo Preview">
        <div
          className="zoom-container"
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={photo.img}
            alt={photo.description}
            className="zoom-image"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            }}
          />
        </div>
      </Modal>
    </>
  );
}
