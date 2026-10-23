import './Experience.css';

const MANAGEMENT = [
  { server: 'New York State Roleplay', role: 'Director', members: 2000, work: 'Staff management, bot management, documents' },
  { server: 'New York State Roleplay', role: 'Department Manager', members: 2000, work: 'Department professionalism, CAD management' },
  { server: 'Florida State Roleplay', role: 'Co-Owner', members: 1400, work: 'Overseeing senior high ranks and staff professionalism' },
  { server: 'Vexira Customs', role: 'High Rank', members: 400, work: 'Overseeing designers and design quality' },
];

const BOTS = [
  { server: 'Softboys', members: 1400, work: 'Transcribes audio files and voice messages', rating: 10 },
  { server: 'Nashville City Roleplay', members: 1000, work: 'Department management, arrest logs, shifts', rating: 9 },
  { server: "Extra's Basement", members: 400, work: 'Roleplay and moderation commands, automod', rating: 9 },
  { server: 'Veloce', members: 400, work: 'Order management, billing, tickets', rating: 8 },
  { server: 'US Marshals Service', members: 200, work: 'Infractions, promotions, shift management', rating: 10 },
];

const MAX = 2000;

function Bar({ members }) {
  return (
    <div className="bar" aria-hidden="true">
      <span className="bar__fill" style={{ width: `${(members / MAX) * 100}%` }} />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section__heading">Where I've worked</h2>
      <p className="section__intro">
        Bar length shows each server's member count, so you can see the scale of each community.
      </p>

      <div className="exp">
        <div>
          <h3 className="exp__title">Community management</h3>
          <ul className="exp__list">
            {MANAGEMENT.map((m) => (
              <li key={m.role} className="exp__item">
                <div className="exp__head">
                  <strong>{m.server}</strong>
                  <span className="exp__count">{m.members.toLocaleString('en-US')}+ members</span>
                </div>
                <Bar members={m.members} />
                <p className="exp__meta"><span className="exp__role">{m.role}.</span> {m.work}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="exp__title">Discord bots I've built</h3>
          <ul className="exp__list">
            {BOTS.map((b) => (
              <li key={b.server} className="exp__item">
                <div className="exp__head">
                  <strong>{b.server}</strong>
                  <span className="exp__count">{b.members.toLocaleString('en-US')}+ members</span>
                </div>
                <Bar members={b.members} />
                <p className="exp__meta">{b.work}. Client rating {b.rating}/10.</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
