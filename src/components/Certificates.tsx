import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Certificates.css";

const allCerts = [
  { src: "/images/cert-python-bootcamp.jpg", alt: "The Ultimate Python Bootcamp: 50 Projects" },
  { src: "/images/cert-building-with-claude.jpg", alt: "Building with the Claude API" },
  { src: "/images/cert-claude-code-101.jpg", alt: "Claude Code 101" },
  { src: "/images/cert-claude-code.jpg", alt: "Claude Code in Action" },
  { src: "/images/cert-ai-fluency.jpg", alt: "AI Fluency: Framework & Foundations" },
  { src: "/images/cert-ai-capabilities.jpg", alt: "AI Capabilities & Limitations" },
  { src: "/images/cert-claude-101.jpg", alt: "Claude 101" },
  { src: "/images/cert-cowork.jpg", alt: "Introduction to Cowork" },
  { src: "/images/cert-subagents.jpg", alt: "Introduction to Agent Skills — Subagents" },
  { src: "/images/cert-skills.jpg", alt: "Introduction to Agent Skills — Skills" },
];

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="certs-page">
      <div className="certs-header">
        <Link to="/" className="certs-back">
          ← Back
        </Link>
        <a href="mailto:aakashbuildss@gmail.com" className="certs-email">
          aakashbuildss@gmail.com
        </a>
      </div>

      <div className="certs-content">
        <h1>
          Courses <span>&</span>
          <br /> Certifications
        </h1>
        <p className="certs-subtitle">
          Certified by Anthropic and Udemy — covering Python engineering, AI foundations,
          applied Claude development, and agentic system design.
        </p>

        <div className="certs-grid">
          {allCerts.map((cert) => (
            <div key={cert.alt} className="cert-card">
              <img src={cert.src} alt={cert.alt} />
              <p>{cert.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
