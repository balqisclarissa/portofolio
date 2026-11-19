import {
  Send,
  ArrowUpRight
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <SectionHeading
        label="GET IN TOUCH"
        title="Let's Connect."
      />

      <div className="contact-card glass-card">

        <div className="contact-orb">
          <Send size={42} />
        </div>

        <h3>
          Have an idea or an opportunity?
        </h3>

        <p>
          I'm always interested in learning,
          collaborating, and exploring new
          opportunities in technology.
        </p>

        <a
          className="button primary"
          href={`mailto:${profile.email}`}
        >
          Send Me an Email
          <ArrowUpRight size={18} />
        </a>

      </div>
    </section>
  );
}

export default Contact;
