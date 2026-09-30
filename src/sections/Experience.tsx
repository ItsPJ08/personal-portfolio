import { experience } from '../data/experience';
import Reveal from '../components/Reveal';

export default function Experience() {
  return (
    <div className="contentexperience">
      <Reveal>
        <h1 className="contentexperience__title"><b>Experience & Accomplishments</b></h1>
      </Reveal>
      {experience.map((item) => (
        <Reveal key={`${item.company}-${item.role}`}>
          <div className="contentexperience__card">
            {item.image && (
              <img
                src={item.image}
                alt={item.company}
                className="contentexperience__image"
              />
            )}
            <h3 className="contentexperience__role">{item.role}</h3>
            <h5 className="contentexperience__company">
              {item.company} · {item.startDate} – {item.endDate}
            </h5>
            <ul className="contentexperience__bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
