import React, { useEffect, useState } from "react";
import "./Header.scss";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "../Icons/Icons";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const socials = [
  { label: "GitHub", url: "https://github.com/hunterbiu1205", Icon: GitHubIcon },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hunterdong1205/", Icon: LinkedInIcon },
  { label: "Instagram", url: "https://www.instagram.com/hunterbiu/", Icon: InstagramIcon },
];

// The last section whose top has passed a third of its own height above the viewport top.
const getCurrentSection = () => {
  if (window.scrollY === 0) return "about";

  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
      current = section.id;
    }
  });
  return current;
};

const Header = () => {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    let frame = null;

    // Coalesce scroll events into one measurement per animation frame.
    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        setCurrentSection(getCurrentSection());
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="app-header sticky">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div>
        <div className="header-title">
          <p>Hey I'm</p>
          <h1>HUNTER DONG</h1>
          <p className="header-subtitle">Web Developer / UI / UX</p>
        </div>

        <nav aria-label="Page sections">
          <ul className="header-menu">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  className={`flex items-center ${currentSection === id ? "active" : ""}`}
                  href={`#${id}`}
                  aria-current={currentSection === id ? "location" : undefined}
                >
                  <span className="header-menu-line"></span>
                  <span className="uppercase">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="header-social flex">
        {socials.map(({ label, url, Icon }) => (
          <li key={label}>
            <a
              className="flex items-center"
              title={label}
              aria-label={`${label} (opens in a new tab)`}
              target="_blank"
              rel="noreferrer"
              href={url}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
