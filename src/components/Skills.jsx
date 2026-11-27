import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading label="WHAT I WORK WITH" title="Technical Skills." />

      <div className="skills-logo-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-logo-card glass-card"
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="skill-logo">
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}`}
                alt={`${skill.name} logo`}
              />
            </div>

            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;