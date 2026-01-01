import "./style.css";
import { dataportfolio } from "../../data/content";
import ProjectCard from "../../components/ProjectCard";

export default function Portfolio() {
  return (
    <section className="portfolio" data-aos="fade-up">

      <h1 className="page-title">My Projects</h1>

      <div className="portfolio-grid">
        {dataportfolio.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
