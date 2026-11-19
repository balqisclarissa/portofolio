import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data/content";

function Experience() {
  return (
    <section id="experience" className="section">

      <SectionHeading
        label="MY JOURNEY"
        title="Experience & Education."
      />

      <div className="timeline">

        {experiences.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="timeline-dot" />

              <div className="timeline-card glass-card">

                <div className="timeline-top">
                  <span>{item.type}</span>
                  <span>{item.date}</span>
                </div>

                <div className="timeline-title">
                  <Icon size={23} />
                  <h3>{item.title}</h3>
                </div>

                <strong>{item.place}</strong>

                <p>{item.description}</p>

              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

export default Experience;
