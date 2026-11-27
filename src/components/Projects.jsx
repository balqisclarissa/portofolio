
import { useState } from "react";

import {
  motion,
  AnimatePresence
} from "motion/react";

import {
  X,
  ArrowUpRight,
  Code2
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = [
    "All",
    "Machine Learning",
    "Cybersecurity",
    "Networking"
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section id="projects" className="section">

      <SectionHeading
        label="SELECTED WORK"
        title="Featured Projects."
      />

      <div className="filter-row">
        {categories.map((category) => (
          <button
            key={category}
            className={
              filter === category
                ? "filter-button selected"
                : "filter-button"
            }
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">

        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >

              <div className={`project-art ${project.color}`}>
                <span>{project.icon}</span>
                <p>{project.category}</p>
              </div>

              <div className="project-body">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <button
                  className="project-link"
                  onClick={() => setSelected(project)}
                >
                  View Details
                  <ArrowUpRight size={17} />
                </button>

              </div>
            </motion.article>
          ))}
        </AnimatePresence>

      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              className="project-modal"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              onClick={(event) => event.stopPropagation()}
            >

              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close project details"
              >
                <X />
              </button>

              <p className="eyebrow">
                {selected.category}
              </p>

              <h2>{selected.title}</h2>

              <p>{selected.details}</p>

              <div className="project-tags">
                {selected.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {selected.github && (
                <a
                  className="button primary"
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} />
                  GitHub
                </a>
              )}

              {selected.prototype && (
                <a
                  className="button primary"
                  href={selected.prototype}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} />
                  Prototype
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Projects;
