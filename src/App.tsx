import { portfolioData } from "./data";
import { Navbar } from "./components/Navbar";
import { MouseLight } from "./components/MouseLight";
import { HiddenText } from "./components/HiddenText";
import { Section } from "./components/Section";
import { Presentation } from "./components/Presentation";
import { TimelineItem } from "./components/TimelineItem";
import { ProjectCard } from "./components/ProjectCard";
import { CertificateCard } from "./components/CertificateCard";
import "./App.css";

function App() {
  const { studies, career, projects, certificates } = portfolioData;

  return (
    <>
      <MouseLight />
      <HiddenText />
      <Navbar />

      <main>
        <Section id="presentation">
          <Presentation />
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        <Section id="certificates" title="Certificates">
          <div className="certificates-list">
            {certificates?.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} />
            ))}
          </div>
        </Section>

        <Section id="studies" title="Studies">
          <div className="timeline-container">
            {studies.map((study, index) => (
              <TimelineItem
                key={index}
                title={study.title}
                subtitle={study.institution}
                period={study.period}
                description={study.description}
                location={study.location}
              />
            ))}
          </div>
        </Section>

        <Section id="career" title="Career">
          <div className="timeline-container">
            {career.map((job, index) => (
              <TimelineItem
                key={index}
                title={job.title}
                subtitle={job.company}
                period={job.period}
                description={job.description}
                location={job.location}
              />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
