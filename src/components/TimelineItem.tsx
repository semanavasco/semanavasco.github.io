import "./TimelineItem.css";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  location: string;
}

export const TimelineItem = ({
  title,
  subtitle,
  period,
  description,
  location,
}: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-header">
        <div className="header-main">
          <div className="timeline-title">{title}</div>
          <div className="timeline-subtitle">
            {subtitle} <span className="location">• {location}</span>
          </div>
        </div>
        <div className="timeline-period">{period}</div>
      </div>
      <p className="timeline-description">{description}</p>
    </div>
  );
};
