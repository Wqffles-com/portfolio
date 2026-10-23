import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">
        I build Discord bots and run the communities that use them.
      </h1>
      <div className="hero__side">
        <p className="hero__subtitle">
          I'm Charlie, a 16-year-old programmer from the Netherlands. I write
          websites and Discord bots, and I've led staff teams for servers with
          over 2,000 members.
        </p>
        <p className="hero__status">Open to new projects</p>
        <div className="hero__actions">
          <a href="#experience" className="btn btn--primary">See my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
      </div>
    </div>
  );
}
