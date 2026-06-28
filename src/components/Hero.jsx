import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        Available for work
      </div>
      <h1 className="hero__title">
        Hiya! I'm <span className="hero__name">Charlie</span>
      </h1>
      <p className="hero__subtitle">
        A 16 year old <strong>programmer</strong> &amp; <strong>community manager</strong> from the Netherlands.
        I build websites and Discord bots, and I manage online communities with thousands of members.
      </p>
      <div className="hero__actions">
        <a href="#experience" className="btn btn--primary">See my work</a>
        <a href="#contact" className="btn btn--ghost">Get in touch</a>
      </div>
    </section>
  );
}
