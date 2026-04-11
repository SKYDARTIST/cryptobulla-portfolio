import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

type Project = {
  number: string;
  name: string;
  category: string;
  tools: string;
  link: string;
  desc: string;
  size: "lg" | "md" | "sm";
  accent?: string;
  image?: string;
  gradient?: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Anti-Gravity",
    category: "Android App / AI",
    tools: "React · Capacitor · Supabase · Gemini · Play Billing",
    link: "https://play.google.com/store/apps/details?id=com.cryptobulla.antigravity",
    desc: "Private AI PDF on the Play Store.",
    size: "lg",
    accent: "800+ installs · 11 paid lifetime sales · 5★",
    image: "/images/work-antigravity.png",
  },
  {
    number: "02",
    name: "MindMint",
    category: "Web App / AI",
    tools: "Next.js · Firebase · Gemini · TypeScript",
    link: "https://mindmint.study",
    desc: "AI study tool — text → mindmaps, quizzes, flashcards.",
    size: "lg",
    image: "/images/work-mindmint.png",
  },
  {
    number: "03",
    name: "CareerPilot AI",
    category: "AI Agent / Automation",
    tools: "Next.js · n8n · Gemini · Claude API",
    link: "https://career-pilot-ai-psi.vercel.app/",
    desc: "Autonomous pipeline: scrapes jobs, filters noise, ranks matches.",
    size: "md",
    image: "/images/work-careerpilot.png",
  },
  {
    number: "04",
    name: "SignalVane",
    category: "Web3 / Analytics",
    tools: "Python · Streamlit · Solana",
    link: "https://solana-narrative-scout.streamlit.app/",
    desc: "AI narrative detection for the Solana ecosystem.",
    size: "md",
    image: "/images/work-signalvane.png",
  },
  {
    number: "05",
    name: "BasedFolio",
    category: "Web3 / Farcaster",
    tools: "Next.js · Farcaster SDK · Base",
    link: "https://farcaster.xyz/miniapps/4pZg_YnPhRUi/basedfolio",
    desc: "Onboarding mini-app for the Base ecosystem.",
    size: "sm",
    gradient: "linear-gradient(135deg, rgba(0, 82, 255, 0.15) 0%, rgba(0, 180, 255, 0.08) 100%)",
  },
  {
    number: "06",
    name: "Nexus Dashboard",
    category: "Analytics / Internal",
    tools: "React · Supabase · Real-time",
    link: "#",
    desc: "Custom admin tool. Found a 100% billing failure bug with it.",
    size: "sm",
    gradient: "linear-gradient(135deg, rgba(127, 64, 255, 0.15) 0%, rgba(180, 100, 255, 0.06) 100%)",
  },
];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <p className="work-subtitle">
          Shipped projects. Real users. Real revenue.
        </p>

        <div className="work-bento">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.link}
              target={project.link === "#" ? undefined : "_blank"}
              rel="noreferrer"
              data-cursor="disable"
              className={`work-card work-card--${project.size}`}
              style={project.gradient ? { background: project.gradient } : undefined}
            >
              {project.image && (
                <div className="work-card__img-wrap">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="work-card__img"
                  />
                </div>
              )}

              <div className="work-card__content">
                <div className="work-card__top">
                  <span className="work-card__num">{project.number}</span>
                  <MdArrowOutward className="work-card__arrow" />
                </div>

                <div className="work-card__body">
                  <h3 className="work-card__name">{project.name}</h3>
                  <p className="work-card__category">{project.category}</p>
                  <p className="work-card__desc">{project.desc}</p>
                  {project.accent && (
                    <p className="work-card__accent">{project.accent}</p>
                  )}
                </div>

                <p className="work-card__tools">{project.tools}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
