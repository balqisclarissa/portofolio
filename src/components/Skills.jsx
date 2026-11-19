import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";

function Skills() {
  return (
    <section id="skills" className="section">

      <SectionHeading
        label="WHAT I WORK WITH"
        title="Technical Skills."
      />

      <div className="skills-grid">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              className="skill-card glass-card"
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7 }}
            >

              <div className="skill-icon">
                <Icon size={25} />
              </div>

              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

export default Skills;
