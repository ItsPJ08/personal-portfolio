import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpeg';
import SocialLinks from '../components/SocialLinks';
import { ArrowRightIcon } from '../components/Icons';

export default function Header() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge">
            <span className="hero__dot" aria-hidden="true" />
            Associate Software Developer at Digital Nest
          </span>
          <h1 className="hero__title">
            <span className="gradient-text">Prabjot Pannu</span>
          </h1>
          <p className="hero__subtitle">
            B.S. in Computer Science with a focus in software engineering. I build web and mobile
            applications from front to back.
          </p>
          <div className="hero__actions">
            <Link to="/#projects" className="btn btn--primary">
              View projects <ArrowRightIcon className="btn__icon" />
            </Link>
            <Link to="/resume" className="btn btn--secondary">Resume</Link>
            <Link to="/contact" className="btn btn--secondary">Get in touch</Link>
          </div>
          <SocialLinks className="hero__social" />
        </div>
        <div className="hero__photo">
          <img src={profile} alt="Prabjot Pannu" className="hero__image" />
        </div>
      </div>
    </section>
  );
}
