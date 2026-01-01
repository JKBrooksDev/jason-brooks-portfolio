import { useState } from "react";
import Modal from "../Modal/Modal";
import "./style.css";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card" data-aos="zoom-in">
        <img src={project.img} alt={project.description} />

        <div className="project-info">
          <h3>{project.description}</h3>

          <div className="project-links">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn code-btn"
              >
                View Code
              </a>
            )}

            {project.detail && (
              <button
                className="project-btn info-btn"
                onClick={() => setOpen(true)}
              >
                More Info
              </button>
            )}
          </div>

          <div className="project-tags">
            {project.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={project.description}
      >
        <p>{project.detail}</p>
      </Modal>
    </>
  );
}
