import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Self-taught AI developer. Shipped 10+ apps in 9 months. I
          didn't learn to build from courses — I started building first, fixed
          bugs, and shipped.
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
          , is live on the Play Store. Built solo using React, Capacitor,
          Supabase, and Gemini API. Currently sitting at 1000+ installs, 13 paid
          sales across 6 countries (USA, France, Germany, Turkey, India, Malaysia), and a 5★ rating. I care about solving real problems:
          No ads, no monthly subscriptions, zero-trust security.
          <br />
          <br />
          I code with a strong bias towards execution and real metrics. I use
          Claude Code and agentic AI-assisted workflows daily. I am also
          Anthropic certified in Claude 101, Claude Code in Action, and AI
          Fluency.
        </p>
      </div>
    </div>
  );
};

export default About;
