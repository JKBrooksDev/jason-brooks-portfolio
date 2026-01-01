import "./style.css";
import { dataabout, datapersevere } from "../../data/content";
import { aboutProfile } from "../../data/content";
import { skills } from "../../data/content";
import { timeline } from "../../data/content";


export default function About() {
  return (
    <section className="about" data-aos="fade-up">
      <h1 className="page-title">About Me</h1>

      <div className="about-profile">
        <img src={aboutProfile.img} alt="Profile" />
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h2>{dataabout.title}</h2>
          <p>{dataabout.aboutme}</p>
        </div>

        <div className="about-creed">
          <h2>{datapersevere.title}</h2>
          <p>{datapersevere.creed}</p>
        </div>
      </div>

      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>

      <h2 className="timeline-title">My Journey</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
