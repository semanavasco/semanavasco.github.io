import type { ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={className}>
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">{children}</div>
    </section>
  );
};
