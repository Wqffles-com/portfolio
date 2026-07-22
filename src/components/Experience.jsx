import './Experience.css';

function Table({ title, columns, rows }) {
  return (
    <div className="table-wrapper">
      <h3 className="table__title">{title}</h3>
      <div className="table__scroll">
        <table className="table">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Experience() {
  const management = [
    ['New York State Roleplay', 'Director', '2,000+', 'Staff management, bot management, documents'],
    ['New York State Roleplay', 'Department Manager', '2,000+', 'Department professionalism, CAD management'],
    ['Florida State Roleplay', 'Co-Owner', '1,400+', 'Overseeing SHR, global professionalism within the staff team'],
    ['Vexira Customs', 'High Ranking', '400+', 'Overseeing designers, ensuring quality of designs'],
  ];

  const bots = [
    ['US Marshals Service', '200+', 'Infractions, promotions, shift management, and more', '10/10'],
    ["Extra's Basement", '400+', 'Roleplay commands, moderation commands, automod', '9/10'],
    ['Nashville City Roleplay', '1,000+', 'Department management, arrest logs, shifts for departments', '9/10'],
    ['Veloce', '400+', 'Order management, billing, ticket system', '8/10'],
    ['Softboys', '1,400+', 'Transcribing of audio files and voice messages', '10/10'],
  ];

  return (
    <section id="experience">
      <p className="section__overline">Experience</p>
      <h2 className="section__heading">Where I've worked</h2>
      <div className="exp__grid">
        <Table
          title="🛡️ Community Management"
          columns={['Server', 'Rank', 'Members', 'Expertise']}
          rows={management}
        />
        <Table
          title="🤖 Discord Bot Development"
          columns={['Server', 'Members', 'Functions', 'Rating']}
          rows={bots}
        />
      </div>
    </section>
  );
}
