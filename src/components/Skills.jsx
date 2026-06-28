import './Skills.css';

function SkillCategory({ title, icon, items }) {
  return (
    <div className="skill-category">
      <div className="skill-category__header">
        <span className="skill-category__icon">{icon}</span>
        <h3 className="skill-category__title">{title}</h3>
      </div>
      <div className="skill-category__tags">
        {items.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const webDev = [
    'ASP.NET Core Web', 'API Development', 'Blazor WASM', 'Razor Pages',
    'Go net/http', 'Python FastAPI', 'MS SQL Server', 'MySQL', 'SQLite',
  ];

  const botDev = [
    'JDA (Java)', 'Discord.Net', 'NetCord', 'discord.py', 'discord.js', 'Eris', 'discord-go',
  ];

  const bots = ['Melonly', 'Wick', 'Ducky'];
  const documents = ['Training Guides', 'Applications', 'Staff Guides'];
  const professionalism = ['In-depth monitoring', 'Investigations'];
  const servers = ['Setups', 'Bot Configuration', 'Advertising'];

  return (
    <section>
      <p className="section__overline">What I know</p>
      <h2 className="section__heading">Skills &amp; Technologies</h2>

      <div className="skills-grid">
        <SkillCategory icon="🌐" title="Web Development" items={webDev} />
        <SkillCategory icon="🤖" title="Bot Development" items={botDev} />
      </div>

      <div className="skills-grid skills-grid--small">
        <SkillCategory icon="⚙️" title="Bots" items={bots} />
        <SkillCategory icon="📄" title="Staff Documents" items={documents} />
        <SkillCategory icon="🎯" title="Staff Professionalism" items={professionalism} />
        <SkillCategory icon="💬" title="Discord Servers" items={servers} />
      </div>
    </section>
  );
}
