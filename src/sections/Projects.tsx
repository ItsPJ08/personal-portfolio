import { projects } from '../data/projects';
import Reveal from '../components/Reveal';

export default function Projects() {
  return (
    <div className="contentprojects" id="projects">
      <Reveal>
        <h1 className="contentprojects__header"><b>Projects</b></h1>
      </Reveal>
      {projects.map((project) => (
        <Reveal key={project.title}>
          <div className="contentprojects__card">
            {project.image && (
              project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <img className="contentprojects__image"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
              ) : (
                <img className="contentprojects__image"
                  src={project.image}
                  alt={project.title}
                />
              )
            )}
            <h3 className="contentprojects__title">{project.title}</h3>
            <p className="contentprojects__description">{project.description}</p>
            <div className="contentprojects__tags">
              {project.tags.map((tag) => (
                <span className="contentprojects__tag" key={tag}>
                  <b>Tools:</b> {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                className="contentprojects__link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
