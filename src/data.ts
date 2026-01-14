export interface ProjectLink {
  label: string;
  url: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: { name: string; iconClass?: string }[];
  links: ProjectLink[];
  image?: string;
}

export interface CareerItem {
  title: string;
  company: string;
  period: string;
  description: string;
  location: string;
}

export interface StudyItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  location: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Presentation {
  name: string;
  title: string;
  description: string[];
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const portfolioData = {
  presentation: {
    name: "Vasco VALADARES SEMANA",
    title: "Software Engineer",
    description: [
      "Developer focusing on system programming.",
      "Currently diving deep into Rust and contributing to open-source projects.",
    ],
    socials: {
      github: "https://github.com/semanavasco",
      linkedin: "https://www.linkedin.com/in/vascosemana/",
      email: "mailto:vasco.valadaressemana@gmail.com",
    },
  },
  projects: [
    {
      title: "ttt (Terminal Typing Test)",
      description:
        "A simple Terminal Typing Test utility written in Rust using ratatui, inspired by Monkeytype.",
      image: "https://raw.githubusercontent.com/semanavasco/ttt/refs/heads/main/ttt.gif",
      technologies: [{ name: "Rust", iconClass: "devicon-rust-original" }],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/semanavasco/ttt",
          icon: "code",
        },
      ],
    },
    {
      title: "dotfm",
      description: "A simple dotfiles manager. ",
      technologies: [{ name: "Rust", iconClass: "devicon-rust-original" }],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/semanavasco/dotfm",
          icon: "code",
        },
      ],
    },
    {
      title: "esplay-rust",
      description: "Tinkering with an ESPlay Micro v2 in Rust.",
      technologies: [{ name: "Rust", iconClass: "devicon-rust-original" }],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/semanavasco/esplay-rust",
          icon: "code",
        },
      ],
    },
    {
      title: "Portfolio",
      description: "This portfolio website built with React and TypeScript.",
      technologies: [
        { name: "React", iconClass: "devicon-react-original" },
        { name: "TypeScript", iconClass: "devicon-typescript-plain" },
        { name: "Vite", iconClass: "devicon-vitejs-plain" },
        { name: "CSS", iconClass: "devicon-css3-plain" },
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/semanavasco/semanavasco.github.io",
          icon: "code",
        },
      ],
    },
  ],
  certificates: [
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2025",
      link: "https://www.credly.com/badges/799e09a5-77b6-4ed9-9978-b8deb4675dfe",
    },
    {
      title: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      date: "Jul 2025",
      link: "https://nextjs.org/learn/certificate?course=dashboard-app&user=79169&certId=dashboard-app-79169-1753167327039",
    },
    {
      title: "React Foundations for Next.js",
      issuer: "Vercel",
      date: "Jul 2025",
      link: "https://nextjs.org/learn/certificate?course=react-foundations&user=79169&certId=react-foundations-79169-1752130587329",
    },
  ],
  studies: [
    {
      title: "Bachelor Ingénierie et Numérique - option Data & Cloud Engineering",
      institution: "ESILV - École Supérieure d'Ingénieurs Léonard de Vinci",
      period: "2025 - Present",
      description: "Software development, cybersecurity, systems & networks. Apprenticeship at SabSystem (telecom).",
      location: "Courbevoie, France",
    },
    {
      title: "BTS SIO - SLAM (Software Solutions & Business Applications)",
      institution: "Ensitech",
      period: "2023 - 2025",
      description: "Application development, software design, web development, IT project management. Apprenticeship at SabSystem (telecom).",
      location: "Montigny-le-Bretonneux, France",
    },
  ],
  career: [
    {
      title: "Software Developer Apprentice",
      company: "SabSystem",
      period: "2023 - Present",
      description: "Backend and software/systems development for all-in-one telecom solutions (luxury hospitality). Focus on low-level systems, Linux and automation.",
      location: "Paris 17e, France",
    },
  ],
};