import './Skills.css';

const GROUPS = [
  {
    title: 'Web development',
    items: ['ASP.NET Core', 'Blazor WASM', 'Razor Pages', 'Go net/http', 'Python FastAPI', 'API design', 'MS SQL Server', 'MySQL', 'SQLite'],
  },
  {
    title: 'Bot development',
    items: ['JDA (Java)', 'Discord.Net', 'NetCord', 'discord.py', 'discord.js', 'Eris', 'discord-go'],
  },
  { title: 'Bots I configure', items: ['Melonly', 'Wick', 'Ducky'] },
  { title: 'Staff documents', items: ['Training guides', 'Applications', 'Staff guides'] },
  { title: 'Staff professionalism', items: ['In-depth monitoring', 'Investigations'] },
  { title: 'Discord servers', items: ['Setups', 'Bot configuration', 'Advertising'] },
];

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section__heading">What I work with</h2>
      <dl className="skills">
        {GROUPS.map((g) => (
          <div key={g.title} className="skills__row">
            <dt>{g.title}</dt>
            <dd>{g.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
