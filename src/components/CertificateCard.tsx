import type { Certificate } from "../data";
import "./CertificateCard.css";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateContent = ({ certificate }: { certificate: Certificate }) => (
  <>
    <div className="certificate-header">
      <div className="certificate-title">
        <span className="material-symbols-rounded certificate-icon">verified</span>
        {certificate.title}
      </div>
      <div className="certificate-date">{certificate.date}</div>
    </div>
    <div className="certificate-issuer">{certificate.issuer}</div>
  </>
);

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  if (certificate.link) {
    return (
      <a
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-card"
      >
        <CertificateContent certificate={certificate} />
      </a>
    );
  }

  return (
    <div className="certificate-card">
      <CertificateContent certificate={certificate} />
    </div>
  );
};
