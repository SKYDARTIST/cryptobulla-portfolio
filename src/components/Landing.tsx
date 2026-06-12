import { PropsWithChildren, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [roleOpen, setRoleOpen] = useState(false);
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <button
              type="button"
              className={`status-badge ${roleOpen ? "status-badge-open" : ""}`}
              onClick={() => setRoleOpen((open) => !open)}
              aria-expanded={roleOpen}
              aria-label="Current role: AI Operator at F5 Hiring Solutions. Click for details."
            >
              <span className="status-badge-row">
                <span className="status-dot"></span>
                <span className="status-badge-role">
                  AI Operator · F5 Hiring Solutions
                </span>
                <span className="status-badge-caret">{roleOpen ? "−" : "+"}</span>
              </span>
              <span className="status-badge-message">
                Aakash — AI Product Developer, building AI products &amp;
                automations at F5 Hiring Solutions.
              </span>
            </button>
            <h2>Hello! I'm</h2>
            <h1>AAKASH</h1>
          </div>
          <div className="landing-info">
            <h3>An AI-Native</h3>
            <h2 className="landing-title-clean">
              Product & Automation Developer
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
