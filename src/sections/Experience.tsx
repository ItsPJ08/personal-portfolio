import { experience } from '../data/experience';
import Reveal from '../components/Reveal';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Background</p>
          <h2 className="section__title">Experience &amp; Accomplishments</h2>
        </Reveal>
        <div className="experience">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`}>
              <article className="card card--hover experience__card">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.company}
                    className={`experience__image ${item.imageFit === 'contain' ? 'experience__image--contain' : ''}`}
                  />
                )}
                <div>
                  <div className="experience__top">
                    <span className="experience__company">{item.company}</span>
                    <span className="experience__date">
                      {item.startDate ? `${item.startDate} – ${item.endDate}` : item.endDate}
                    </span>
                  </div>
                  <h3 className="experience__role">{item.role}</h3>
                  <ul className="experience__bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
