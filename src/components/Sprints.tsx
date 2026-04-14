import { MdArrowOutward, MdTimer } from "react-icons/md";
import "./styles/Sprints.css";

type Sprint = {
  time: string;
  name: string;
  desc: string;
  tools: string;
  link: string;
  live?: boolean;
  image?: string;
  demoVideo?: string;
};

const sprints: Sprint[] = [
  {
    time: "2 hrs",
    name: "LLM Comparator",
    desc: "Compare outputs across multiple LLMs side-by-side in real time. Built during a live timed technical trial.",
    tools: "React · Vite · Vercel",
    link: "https://llm-comparator.vercel.app",
    live: true,
    image: "/images/work-llm.png",
  },
  {
    time: "48 hrs",
    name: "Drone Management Dashboard",
    desc: "Fleet tracking, mission control, and real-time telemetry dashboard. Built as a timed technical assessment.",
    tools: "React · TypeScript · Supabase",
    link: "https://flytbase-drone-survey-three.vercel.app/",
    live: true,
    image: "/images/work-drone.png",
    demoVideo: "https://drive.google.com/file/d/145JI2xWvi7Wdmp6khHZjV2Bi1_sH53LZ/view?usp=drivesdk",
  },
  {
    time: "48 hrs",
    name: "CarMatch AI",
    desc: "AI car advisor for CarDekho Group take-home. 4 lifestyle questions → Gemini shortlists 3 cars with match score, EMI estimate, and a head-to-head verdict. No spec questions — the AI maps lifestyle to specs silently.",
    tools: "Next.js · Gemini 2.5 Flash · TypeScript · Tailwind v4",
    link: "https://cardekho-ai-advisor.vercel.app",
    live: true,
    image: "/images/work-carmatch.png",
  },
];

const Sprints = () => {
  return (
    <section className="sprints-section" id="sprints">
      <div className="sprints-inner section-container">
        <div className="sprints-header">
          <div>
            <h2>
              Built Under <span>Pressure</span>
            </h2>
            <p className="sprints-subtitle">
              Timed builds. No hints. Live under 48 hours.
            </p>
          </div>
          <div className="sprints-badge">
            <MdTimer />
            Clock was running
          </div>
        </div>

        <div className="sprints-grid">
          {sprints.map((sprint) => (
            <a
              key={sprint.name}
              href={sprint.link}
              target={sprint.link === "#" ? undefined : "_blank"}
              rel="noreferrer"
              data-cursor="disable"
              className="sprint-card"
            >
              {sprint.image && (
                <div className="sprint-card__img-wrap">
                  <img src={sprint.image} alt={sprint.name} className="sprint-card__img" />
                </div>
              )}
              <div className="sprint-card__top">
                <span className="sprint-card__time">
                  <MdTimer /> {sprint.time}
                </span>
                <MdArrowOutward className="sprint-card__arrow" />
              </div>

              <div className="sprint-card__body">
                <h3 className="sprint-card__name">{sprint.name}</h3>
                <p className="sprint-card__desc">{sprint.desc}</p>
              </div>

              <div className="sprint-card__footer">
                <span className="sprint-card__tools">{sprint.tools}</span>
                <div className="sprint-card__footer-right">
                  {sprint.live && (
                    <span className="sprint-card__live">
                      <span className="sprint-card__live-dot" />
                      Live
                    </span>
                  )}
                  {sprint.demoVideo && (
                    <a
                      href={sprint.demoVideo}
                      target="_blank"
                      rel="noreferrer"
                      className="sprint-card__demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      ▶ Demo
                    </a>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sprints;
