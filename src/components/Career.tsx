import { Link } from "react-router-dom";
import "./styles/Career.css";

const Career = () => {
  const featuredCerts = [
    { src: "/images/cert-python-bootcamp.jpg", alt: "The Ultimate Python Bootcamp: 50 Projects" },
    { src: "/images/cert-ai-agent.jpg", alt: "Agentic System Workflows" },
    { src: "/images/cert-claude-code-101.jpg", alt: "Claude Code 101" },
  ];

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Hard Problems, <span>Automation</span>
          <br /> & Proof
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
              Users were paying but not getting premium access. I traced the full Google Play → Supabase billing flow and found verification calls were being blocked by fail-secure rate limiting. Restructured the flow and restored premium grants.
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
              Paid users lost access after linking Google sign-in because local state and database state were out of sync. Built a reconciliation step that resolves the correct purchase tier before the app UI mounts.
            </p>
          </div>

          {/* AUTOMATION */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LinkedIn Outreach Workflow</h4>
                <h5>Automation System</h5>
              </div>
              <h3>N8N</h3>
            </div>
            <p>
              Built a 6-workflow automation system for campaign setup, connection sending, acceptance polling, DM follow-ups, reply tracking, sender limits, failure logging, and daily reset logic.
            </p>
          </div>

          {/* AI AGENT */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Job Discovery Agent</h4>
                <h5>CareerPilot AI</h5>
              </div>
              <h3>AGENT</h3>
            </div>
            <p>
              Built an automated job discovery pipeline using SerpAPI, Gemini scoring, culture analysis, resume tailoring, cover-letter generation, Supabase storage, and a Next.js dashboard.
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
              Certified in Claude, Claude Code, AI Fluency, tool use, agentic workflows, and prompt architecture. I use these foundations daily to build practical AI-assisted products and automations.
            </p>
          </div>

          {/* LARGE CERTIFICATES GRID */}
          <div className="certificates-grid">
            {featuredCerts.map((cert) => (
              <img key={cert.alt} src={cert.src} alt={cert.alt} />
            ))}
          </div>
          <div className="certificates-view-all">
            <Link to="/certificates" className="view-all-btn">
              View all certifications →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
