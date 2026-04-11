import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };

  // Split text FIRST — before main is visible
  const landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { type: "chars,lines", linesClass: "split-line" }
  );
  const landingText2 = new SplitText(".landing-h2-info", TextProps);
  const landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  const landingText4 = new SplitText(".landing-h2-1", TextProps);
  const landingText5 = new SplitText(".landing-h2-2", TextProps);

  // Set initial invisible states BEFORE revealing main — no flash
  gsap.set(landingText.chars, { opacity: 0, y: 80, filter: "blur(5px)" });
  gsap.set(landingText2.chars, { opacity: 0, y: 80, filter: "blur(5px)" });
  gsap.set([".landing-info-h2", ".header", ".icons-section", ".nav-fade"], { opacity: 0 });

  // NOW reveal main — all animated elements already invisible
  document.getElementsByTagName("main")[0].classList.add("main-active");

  // Animate in
  gsap.to(landingText.chars, {
    opacity: 1,
    duration: 1.2,
    filter: "blur(0px)",
    ease: "power3.inOut",
    y: 0,
    stagger: 0.025,
    delay: 0.3,
  });

  gsap.to(landingText2.chars, {
    opacity: 1,
    duration: 1.2,
    filter: "blur(0px)",
    ease: "power3.inOut",
    y: 0,
    stagger: 0.025,
    delay: 0.3,
  });

  gsap.to(".landing-info-h2", {
    opacity: 1,
    duration: 1.2,
    ease: "power1.inOut",
    y: 0,
    delay: 0.8,
  });

  gsap.to([".header", ".icons-section", ".nav-fade"], {
    opacity: 1,
    duration: 1.2,
    ease: "power1.inOut",
    delay: 0.1,
  });

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay2 },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay },
      0
    )
    .to(
      Text2.chars,
      { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 },
      1
    );
}
