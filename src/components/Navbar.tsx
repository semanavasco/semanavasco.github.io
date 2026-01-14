import { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("presentation");

  const navLinks = [
    { id: "presentation", label: "WHO AM I" },
    { id: "projects", label: "PROJECTS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "studies", label: "STUDIES" },
    { id: "career", label: "CAREER" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav>
      <div className="mobile-current-page">
        {navLinks.find((l) => l.id === activeSection)?.label}
      </div>
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-rounded">{isOpen ? "close" : "menu"}</span>
      </button>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
