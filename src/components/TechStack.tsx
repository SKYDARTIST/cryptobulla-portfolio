import "./styles/TechStack.css";

const rowOne = [
  "n8n",
  "Workflow Automation",
  "AI Agents",
  "Claude API",
  "Gemini API",
  "Prompt Engineering",
  "REST APIs",
  "Webhooks",
];

const rowTwo = [
  "Lead Scoring",
  "Outbound Automation",
  "Data Enrichment",
  "AEO",
  "SEO",
  "Google Sheets API",
  "Gmail API",
  "Playwright",
];

const rowThree = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Supabase",
  "Vercel",
];

const TechStack = () => {
  return (
    <section className="tech-section" id="tech">
      <div className="tech-intro">
        <div>
          <h2>
            Technical <span>Arsenal</span>
          </h2>
          <p>The stack running behind my production apps.</p>
        </div>
        <img
          src="https://streak-stats.demolab.com/?user=SKYDARTIST&theme=dark&background=0b080c&border=ffffff15&ring=7f40ff&fire=b464ff&currStreakLabel=b464ff&sideLabels=a1a1aa&dates=71717a&hide_border=false"
          alt="GitHub Streak"
          className="tech-streak"
        />
      </div>

      <div className="tech-marquee" aria-hidden="true">
        <div className="tech-marquee__track tech-marquee__track--ltr">
          {[...rowOne, ...rowOne].map((item, i) => (
            <span key={`r1-${i}`} className="tech-chip">
              {item}
            </span>
          ))}
        </div>

        <div className="tech-marquee__track tech-marquee__track--rtl">
          {[...rowTwo, ...rowTwo].map((item, i) => (
            <span key={`r2-${i}`} className="tech-chip tech-chip--alt">
              {item}
            </span>
          ))}
        </div>

        <div className="tech-marquee__track tech-marquee__track--ltr2">
          {[...rowThree, ...rowThree].map((item, i) => (
            <span key={`r3-${i}`} className="tech-chip tech-chip--prod">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
