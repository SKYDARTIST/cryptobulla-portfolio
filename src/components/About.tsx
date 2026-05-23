import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Self-taught AI, mobile, and workflow automation developer. I build
          production apps, internal tools, and automation systems using React,
          Capacitor, Supabase, n8n, APIs, webhooks, and AI models.
          <br />
          <br />
          My primary app,{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.cryptobulla.antigravity"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--purple)",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            PDF Editor & AI: Anti-Gravity
          </a>
          , is live on the Play Store with 1200+ installs, 14 paid lifetime
          sales across 7 countries, and a 5★ rating. I built it solo with React,
          Capacitor, Supabase, Gemini API, Google Play Billing, HMAC validation,
          and Play Integrity.
          <br />
          <br />
          I also build automation systems around real workflows: job discovery
          agents, inbox workflows, LinkedIn outreach pipelines, API
          orchestration, Google Sheets-based operations, webhook handling, and
          AI-assisted reporting. My focus is practical shipping: secure flows,
          clear metrics, fast iteration, and products that solve real user
          problems.
        </p>
      </div>
    </div>
  );
};

export default About;
