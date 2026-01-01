import "./style.css";
import { photodata } from "../../data/content";
import PhotoCard from "../../components/PhotoCard";

export default function Photos() {
  return (
    <section className="photos" data-aos="fade-up">

      <h1 className="page-title">Photo Gallery</h1>

      <div className="photos-grid">
        {photodata.map((photo, index) => (
          <PhotoCard key={index} photo={photo} />
        ))}
      </div>
    </section>
  );
}
