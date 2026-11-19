
function SectionHeading({ label, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>

      <h2>{title}</h2>

      <div className="heading-line" />
    </div>
  );
}

export default SectionHeading;
