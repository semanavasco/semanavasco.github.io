import "./ErrorMessage.css";

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="error-container">
      <div className="error-icon">
        <span className="material-symbols-rounded">error</span>
      </div>
      <h2 className="error-title">Oops! Something went wrong</h2>
      <p className="error-text">{message}</p>
      <button className="retry-button" onClick={onRetry}>
        <span className="material-symbols-rounded">refresh</span>
        Try Again
      </button>
    </div>
  );
}
