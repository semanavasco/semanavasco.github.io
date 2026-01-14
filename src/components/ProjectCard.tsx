import type { Project } from "../data";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      {project.image && (
        <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
      )}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
        </div>
        <p className="project-description">{project.description}</p>

        <div className="project-tech-list">
          {project.technologies.map((tech) => (
            <div key={tech.name} className="tech-item" title={tech.name}>
              {tech.iconClass && <i className={`${tech.iconClass} tech-icon`}></i>}
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              {link.icon && <span className="material-symbols-rounded">{link.icon}</span>}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
