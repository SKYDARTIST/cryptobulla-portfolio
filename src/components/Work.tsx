import { useState } from "react";
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
  demoVideo?: string;
  videoId?: string;
  githubLink?: string;
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
    accent: "1900+ installs · 18 paid sales · 9 countries · 5★",
    image: "/images/work-antigravity.png",
    demoVideo: "https://drive.google.com/file/d/1NRlvMLsLzVk7_dEa2TiDYkyF-QOhaakx/view?usp=drivesdk",
  },
  {
    number: "02",
    name: "AEO-Pixii",
    category: "AI Tool / 48hr Build",
    tools: "Next.js · Gemini 2.5 Flash · SerpAPI · Vercel",
    link: "https://aeo-pixii.vercel.app",
    desc: "AI Engine Optimization diagnostic for Amazon sellers. Type a buyer query — see which competitors AI recommends and exactly why. Get fix recommendations in 30 seconds.",
    size: "lg",
    accent: "Built in 48 hrs · Submitted as take-home assessment",
    image: "/images/aeo-pixii.png",
    videoId: "cJbJvRsrQLM",
    githubLink: "https://github.com/SKYDARTIST/AEO-Pixii",
  },
  {
    number: "03",
    name: "LinkedIn DM Automation",
    category: "Automation / n8n",
    tools: "n8n · Unipile · Google Sheets",
    link: "https://github.com/SKYDARTIST/Linkedin-DM",
    desc: "6-workflow LinkedIn outreach system. Sends connection requests, follows up with 3-stage messages at 48h intervals, detects replies via webhook, withdraws unaccepted invites after 7 days.",
    size: "md",
    accent: "Built in 1 day · n8n + Unipile + Google Sheets",
    image: "/images/linkedin-dm.png",
    githubLink: "https://github.com/SKYDARTIST/Linkedin-DM",
  },
  {
    number: "04",
    name: "CareerPilot AI",
    category: "AI Agent / Automation",
    tools: "Next.js · n8n · Gemini · Claude API",
    link: "https://career-pilot-ai-psi.vercel.app/",
    desc: "Autonomous pipeline: scrapes jobs, filters noise, ranks matches.",
    size: "md",
    image: "/images/career-pilot.png",
  },
  {
    number: "05",
    name: "Nexus",
    category: "EdTech / Full Stack",
    tools: "Next.js · Supabase · JWT · Tailwind",
    link: "https://lwl-dashboard.vercel.app/",
    desc: "Two-sided learning platform built in 24 hours. Students submit work, mentors review and grade in real time.",
    size: "md",
    image: "/images/work-nexus.png",
  },
  {
    number: "06",
    name: "MindMint",
    category: "Web App / AI",
    tools: "Next.js · Firebase · Gemini · TypeScript",
    link: "https://mindmint.study",
    desc: "AI study tool — text → mindmaps, quizzes, flashcards.",
    size: "md",
    image: "/images/work-mindmint.png",
  },
];

const Work = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

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
                  {project.videoId && (
                    <button
                      className="work-card__video-thumb"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveVideoId(project.videoId!);
                      }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                        alt="Watch demo"
                      />
                      <span className="work-card__video-thumb-play">▶</span>
                    </button>
                  )}
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

                <div className="work-card__footer">
                  <p className="work-card__tools">{project.tools}</p>
                  <div className="work-card__footer-actions">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="work-card__github"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                    {project.demoVideo && (
                      <a
                        href={project.demoVideo}
                        target="_blank"
                        rel="noreferrer"
                        className="work-card__demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ▶ Watch Demo
                      </a>
                    )}
                    {project.videoId && (
                      <button
                        className="work-card__demo"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveVideoId(project.videoId!);
                        }}
                      >
                        ▶ Watch Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {activeVideoId && (
        <div
          className="video-modal-overlay"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setActiveVideoId(null)}
            >
              ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-modal-iframe"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
