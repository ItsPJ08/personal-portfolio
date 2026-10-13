import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Reveal from '../components/Reveal';
import { ArrowRightIcon, ArrowUpRightIcon, CodeIcon } from '../components/Icons';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Selected work</p>
          <h2 className="section__title">Projects</h2>
        </Reveal>
        <div className="projects">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article className="card card--hover project">
                <div className="project__top">
                  <span className="project__icon"><CodeIcon /></span>
                  {project.github && <ArrowUpRightIcon className="project__arrow" />}
                </div>
                <h3 className="project__title">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="project__description">{project.description}</p>
                <p className="project__impact">
                  <span className="project__impact-label">My impact</span>
                  {project.impact}
                </p>
                {project.demo && (
                  <Link to={project.demo} className="project__demo">
                    Watch demo <ArrowRightIcon className="btn__icon" />
                  </Link>
                )}
                <ul className="project__tags" aria-label="Tools used">
                  {project.tags.map((tag) => (
                    <li className="tag" key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
