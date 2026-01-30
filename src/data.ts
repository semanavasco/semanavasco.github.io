import { useState, useEffect } from "react";

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

export interface PortfolioData {
  presentation: Presentation;
  projects: Project[];
  certificates: Certificate[];
  studies: StudyItem[];
  career: CareerItem[];
}

const GIST_URL = "https://gist.githubusercontent.com/semanavasco/ecda4254b47860601dc694aa0f43fed1/raw/portfolio-data.json";

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(GIST_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: PortfolioData) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}