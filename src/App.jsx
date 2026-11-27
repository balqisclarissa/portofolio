
import RadialMenu from "./components/RadialMenu";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <RadialMenu />

      <main id="portfolio-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Balqis Rahma Clarissa.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </>
  );

  
}

export default App;
