import { MEMBERS } from "../data/menu";
import "./Admin.css";

const STAFF = [
  { name: "Rahul Patil", status: "Personaltraining (aktiv)", since: "06:00", progress: 70 },
  { name: "Sneha Kulkarni", status: "Flächendienst", since: "07:30", progress: 45 },
  { name: "Amit Deshmukh", status: "Pause", since: "08:00", progress: 20 },
];

export function Admin() {
  const present = 3;
  const dueCount = MEMBERS.filter((m) => m.status === "due").length;

  return (
    <main className="page admin">
      <div className="container">
        <h1 className="page-title">Verwaltung</h1>

        <div className="admin-kpis">
          <div className="card admin-kpi">
            <span className="admin-kpi-num">{present}</span>
            <span>Mitglieder anwesend</span>
          </div>
          <div className="card admin-kpi">
            <span className="admin-kpi-num">{STAFF.length}</span>
            <span>Personal im Dienst</span>
          </div>
          <div className="card admin-kpi">
            <span className="admin-kpi-num">{dueCount}</span>
            <span>Beitragserinnerungen</span>
          </div>
        </div>

        <section className="card admin-section">
          <h2 className="admin-h2">Personal und Trainer</h2>
          <div className="admin-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Check-in</th>
                  <th scope="col">Tagesaufgaben</th>
                </tr>
              </thead>
              <tbody>
                {STAFF.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td><span className="admin-badge is-info">{s.status}</span></td>
                    <td>{s.since}</td>
                    <td>
                      <progress className="admin-bar" max={100} value={s.progress} aria-label={`Fortschritt ${s.name}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card admin-section">
          <h2 className="admin-h2">Mitglieder und Beiträge</h2>
          <div className="admin-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Tarif</th>
                  <th scope="col">Status</th>
                  <th scope="col">Fällig am</th>
                </tr>
              </thead>
              <tbody>
                {MEMBERS.map((m) => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.plan}</td>
                    <td>
                      <span className={`admin-badge ${m.status === "due" ? "is-due" : "is-paid"}`}>
                        {m.status === "due" ? "Offen" : "Bezahlt"}
                      </span>
                    </td>
                    <td>{m.nextDue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;
