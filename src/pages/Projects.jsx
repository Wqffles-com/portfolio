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
    <div className="projects">
      <h1 className="section__heading">Projects</h1>
      <p className="section__intro">Things I've built and shipped.</p>
      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-card__img-wrap">
              <img src={p.screenshot} alt={`${p.name} home page`} width="1280" height="720" loading="lazy" className="project-card__img" />
            </div>
            <div className="project-card__body">
              <div className="project-card__header">
                <h3 className="project-card__name">{p.name}</h3>
                <span className="project-card__arrow" aria-hidden="true">↗</span>
              </div>
              <p className="project-card__desc">{p.description}</p>
              <span className="visually-hidden">(opens in a new tab)</span>
              <div className="project-card__stack">
                {p.stack.map((t) => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
