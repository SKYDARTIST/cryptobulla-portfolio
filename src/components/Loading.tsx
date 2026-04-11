import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (percent < 100) return;
    const t1 = setTimeout(() => setDone(true), 300);
    // Fire initialFX while loader is STILL visible — splits text, sets initial GSAP
    // states, and starts animations underneath the loader. No flash possible since
    // loader fully covers the main until it starts fading out.
    const t2 = setTimeout(() => {
      document.body.style.overflow = "";
      import("./utils/initialFX").then((mod) => {
        if (mod.initialFX) mod.initialFX();
      });
    }, 700);
    const t3 = setTimeout(() => setExiting(true), 1000);
    const t4 = setTimeout(() => {
      setIsLoading(false);
    }, 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [percent >= 100]);

  const displayPercent = Math.min(percent, 100);
  const statusText =
    displayPercent < 25
      ? "Initializing"
      : displayPercent < 60
      ? "Loading assets"
      : displayPercent < 95
      ? "Almost there"
      : "Complete";

  return (
    <div className={`loader-root${exiting ? " loader-exit" : ""}`}>
      <div className="loader-grain" />
      <div className="loader-grid" />

      {/* Top-left brand */}
      <div className="loader-brand">AAKASH</div>

      {/* Center name */}
      <div className="loader-center">
        <div className={`loader-name${done ? " loader-name--done" : ""}`}>
          <span>A</span><span>A</span><span>K</span><span>A</span><span>S</span><span>H</span>
        </div>
        <div className="loader-role">AI Product Builder</div>
      </div>

      {/* Bottom progress */}
      <div className="loader-bottom">
        <div className="loader-bottom-row">
          <span className="loader-status">{statusText}</span>
          <span className="loader-percent">{displayPercent}%</span>
        </div>
        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${displayPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  // Fast ramp 0→50, slow crawl 50→92, jump to 100 on loaded()
  let interval = setInterval(() => {
    if (percent < 50) {
      percent = Math.min(50, percent + Math.round(Math.random() * 5 + 2));
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 92) {
          percent = Math.min(92, percent + Math.round(Math.random() * 2));
          setLoading(percent);
        }
      }, 1600);
    }
  }, 80);

  function clear() {
    clearInterval(interval);
  }

  function loaded(): Promise<number> {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 10);
    });
  }

  return { loaded, percent, clear };
};
