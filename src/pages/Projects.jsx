import './Projects.css';

const PROJECTS = [
  {
    name: 'AstroShare',
    url: 'https://share.astrolink.cc',
    description: 'Share any file with a single link.',
    stack: ['Next.js', 'Postgres', 'Cloudflare R2', 'Stripe'],
    screenshot: '/astrolink-screenshot.png',
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <p className="section__overline">Work</p>
      <h2 className="section__heading">Projects</h2>
      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="project-card">
            <div className="project-card__img-wrap">
              <img src={p.screenshot} alt={`${p.name} screenshot`} className="project-card__img" />
            </div>
            <div className="project-card__body">
              <div className="project-card__header">
                <h3 className="project-card__name">{p.name}</h3>
                <span className="project-card__arrow">↗</span>
              </div>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__stack">
                {p.stack.map((t) => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
