
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section">

      <SectionHeading
        label="GET TO KNOW ME"
        title="About Me."
      />

      <div className="about-grid">

        <div className="about-visual glass-card">
          <div className="avatar-circle">
            <span>BC</span>
          </div>

          <p>INFORMATICS STUDENT</p>
        </div>

        <div className="about-content">

          <h3>
            Turning curiosity into
            <span className="gradient-text">
              {" "}possibilities.
            </span>
          </h3>

          <p>
            I am an Informatics student at Universitas Pembangunan Nasional "Veteran" Jawa Timur, interested in
            technology, software development, machine
            learning, and computer networking.
          </p>

          <p>
            I enjoy learning new technologies, working
            on academic projects, and developing
            solutions that combine creativity and
            problem-solving.
          </p>

          <div className="about-details">
            <div>Surabaya</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
