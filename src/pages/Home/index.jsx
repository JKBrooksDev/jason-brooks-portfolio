import "./style.css";
import { introdata } from "../../data/content";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <section className="home hero-fade" data-aos="fade-up">

      <div className="home-text">
        <h1>{introdata.title}</h1>

        <h2 className="animated-text">
          <ReactTyped
            strings={[
              introdata.animated.first,
              introdata.animated.second,
              introdata.animated.third,
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>

        <p>{introdata.description}</p>

        <Link href="/portfolio" className="cta-btn">
          View My Work
        </Link>
      </div>

      <div className="home-image">
        <img src={introdata.your_img_url} alt="Jason Brooks" />
      </div>
    </section>
  );
}
