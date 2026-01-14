import { portfolioData } from "../data";
import "./Presentation.css";

export const Presentation = () => {
  const { presentation } = portfolioData;

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
        {presentation.socials.github && (
          <a href={presentation.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {presentation.socials.linkedin && (
          <a href={presentation.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {presentation.socials.email && <a href={presentation.socials.email}>Email</a>}
      </div>
    </div>
  );
};
