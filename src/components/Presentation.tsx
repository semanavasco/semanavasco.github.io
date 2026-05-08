import type { Presentation as PresentationType } from "../data";
import "./Presentation.css";

interface Props {
  presentation: PresentationType;
}

export const Presentation = ({ presentation }: Props) => {

  return (
    <div className="presentation">
      <h1>{presentation.name}</h1>
      <h2 className="subtitle">{presentation.title}</h2>

      <div className="description">
        {presentation.description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="socials">
        <a href="/assets/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-rounded">description</span>
          Resume
        </a>
        {presentation.socials.github && (
          <a href={presentation.socials.github} target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-original"></i>
            GitHub
          </a>
        )}
        {presentation.socials.linkedin && (
          <a href={presentation.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="devicon-linkedin-plain"></i>
            LinkedIn
          </a>
        )}
        {presentation.socials.email && (
          <a href={presentation.socials.email}>
            <span className="material-symbols-rounded">mail</span>
            Email
          </a>
        )}
      </div>
    </div>
  );
};