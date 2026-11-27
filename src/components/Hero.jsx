import { motion } from "motion/react";

import {
  Sparkles,
  ArrowUpRight,
  ArrowDown,
  Download,
  Code2,
  BriefcaseBusiness
} from "lucide-react";

import { profile } from "../data/content";

function Hero() {
  return (
    <section id="home" className="hero section">

      <div className="hero-glow" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <span className="availability">
          <span className="availability-dot" />
          Open to learning and collaboration
        </span>

        <p className="eyebrow">
          <Sparkles size={16} />
          WELCOME TO MY PORTOFOLIO
        </p>

        <h1>
          Hi, I'm
          <br />

          <span className="gradient-text">
            {profile.name}.
          </span>
        </h1>

        <h2 className="hero-role">
          {profile.role}
          <span className="typing-cursor" />
        </h2>

        <p className="hero-description">
          {profile.tagline}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            Explore My Work
            <ArrowUpRight size={18} />
          </a>

          <a
            href={profile.cv}
            className="button secondary"
            download
          >
            Download CV
            <Download size={18} />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness />
          </a>

          <span>LET'S CONNECT</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-portrait">

          <div className="portrait-glow" />

          <div className="portrait-ring" />

          <div className="portrait-blob">
            <img
              src="/photo.png"
              alt="Profile"
              className="portrait-image"
            />
          </div>

          <div className="portrait-orbit orbit-a" />
          <div className="portrait-orbit orbit-b" />

          <div className="portrait-label">
            <Code2 size={16} />
            <span>INFORMATICS</span>
          </div>

        </div>
      </motion.div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={17} />
        SCROLL TO EXPLORE
      </a>

    </section>
  );
}

export default Hero;
