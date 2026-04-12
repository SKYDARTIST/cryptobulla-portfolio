import { useState } from "react";
import "./styles/Career.css";

const Career = () => {
  const [showAll, setShowAll] = useState(false);

  const allCerts = [
    { src: "/images/cert-building-with-claude.jpg", alt: "Building with the Claude API" },
    { src: "/images/cert-claude-code-101.jpg", alt: "Claude Code 101" },
    { src: "/images/cert-cowork.jpg", alt: "Introduction to Cowork" },
    { src: "/images/cert-claude-101.jpg", alt: "Claude 101" },
    { src: "/images/cert-claude-code.jpg", alt: "Claude Code in Action" },
    { src: "/images/cert-ai-fluency.jpg", alt: "AI Fluency: Framework & Foundations" },
    { src: "/images/cert-ai-capabilities.jpg", alt: "AI Capabilities & Limitations" },
  ];

  const visibleCerts = showAll ? allCerts : allCerts.slice(0, 3);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Hard Problems <span>&</span>
          <br /> Mindset
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* HARD PROBLEM 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>100% Billing Failure Fix</h4>
                <h5>Anti-Gravity Prod Bug</h5>
              </div>
              <h3>DEBUG</h3>
            </div>
            <p>
              Users were paying but not getting premium access. I debugged the entire 5-layer billing stack spanning Google Play to Supabase, and found my rate limiter was configured to fail-secure, silently blocking verification calls. Restructured to fail-open. True success rate went from 0% to 99.9% overnight.
            </p>
          </div>
          
          {/* HARD PROBLEM 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Auth State Sync Resolution</h4>
                <h5>Anti-Gravity Prod Bug</h5>
              </div>
              <h3>OAUTH</h3>
            </div>
            <p>
              Paid users lost access when linking Google sign-in due to a state mismatch between local storage and the remote database. Built a background handshake reconciliation step that settles the correct purchase tier before the UI ever mounts.
            </p>
          </div>

          {/* BUILDER PHILOSOPHY */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Leverage Over Labor</h4>
                <h5>Builder Philosophy</h5>
              </div>
              <h3>MINDSET</h3>
            </div>
            <p>
              Code is just a tool, not the end goal. I use Claude and agentic workflows to accelerate development by 10x, leaving my human energy for the things that matter: product strategy, protecting user privacy, and solving genuine market problems.
            </p>
          </div>

          {/* CERTIFICATIONS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Anthropic Certified</h4>
                <h5>AI Engineering</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Formally certified directly by the lab behind Claude in Advanced Tool Use, Agentic System Workflows, and Applied Prompt Architecture. Proof of work over credentials, but knowing the foundation matters.
            </p>
          </div>

          {/* LARGE CERTIFICATES GRID */}
          <div className="certificates-grid">
            {visibleCerts.map((cert) => (
              <img key={cert.alt} src={cert.src} alt={cert.alt} />
            ))}
          </div>
          <div className="certificates-view-all">
            <button onClick={() => setShowAll(!showAll)} className="view-all-btn">
              {showAll ? "Show less ↑" : "View all certifications →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
