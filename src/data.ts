import { useEffect, useCallback, useReducer } from "react";

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

type State = {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: PortfolioData }
  | { type: "FETCH_ERROR"; payload: string };

function portfolioReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function usePortfolioData() {
  const [state, dispatch] = useReducer(portfolioReducer, {
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(() => {
    dispatch({ type: "FETCH_START" });
    fetch(GIST_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((json: PortfolioData) => {
        dispatch({ type: "FETCH_SUCCESS", payload: json });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}
