
import RadialMenu from "./components/RadialMenu";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
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
          Built with React.js.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;
