import profile from '../assets/profile.jpeg';

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <img src={profile} alt="Prabjot Pannu" className="header__image" />
        <div className="header__text">
          <h1 className="header__title">Prabjot Pannu</h1>
          <p className="header__subtitle">
            Associate Software Developer at Digital Nest | B.S. in Computer Science with a focus in software engineering.
          </p>
        </div>
      </div>
    </div>
  );
}