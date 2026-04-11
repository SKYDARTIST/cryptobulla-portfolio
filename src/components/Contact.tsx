import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const socials = [
  { label: "Github", href: "https://github.com/SKYDARTIST" },
  { label: "Twitter / X", href: "https://x.com/AakashBuild" },
  {
    label: "Play Store",
    href: "https://play.google.com/store/apps/details?id=com.cryptobulla.antigravity",
  },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <span className="contact-badge">
          <span className="contact-badge__dot" />
          Available for internships
        </span>

        <h2 className="contact-statement">
          Let's build <br />
          something <span>real.</span>
        </h2>

        <a
          href="mailto:aakashbuildss@gmail.com"
          className="contact-cta"
          data-cursor="disable"
        >
          aakashbuildss@gmail.com
          <MdArrowOutward />
        </a>

        <div className="contact-grid">
          <div className="contact-col">
            <h4>Available for</h4>
            <p>AI integrations · Mobile apps · Freelance projects</p>
          </div>

          <div className="contact-col">
            <h4>Find me on</h4>
            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  {s.label} <MdArrowOutward />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <span className="contact-sign">
            Designed and developed by <span>Aakash</span>
          </span>
          <span className="contact-copy">
            <MdCopyright /> 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
