import "./Loading.css";

export function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading portfolio...</p>
    </div>
  );
}
