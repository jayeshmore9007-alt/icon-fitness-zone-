import { PLANS } from "../data/menu";
import { FEATURE_IMAGES, GALLERY } from "../data/media";
import "./Home.css";

const features = [
  {
    image: FEATURE_IMAGES.face,
    title: "Kein Gesicht, kein Zutritt",
    text: "Das Check-in-Terminal erkennt Mitglieder, Trainer und Personal per Gesichtsscan und schützt vor Foto-Betrug.",
  },
  {
    image: FEATURE_IMAGES.voice,
    title: "Anmeldung per Sprache",
    text: "Neue Mitglieder sprechen mit dem Assistenten auf Deutsch, Englisch, Hindi oder Marathi und zahlen direkt per UPI-QR.",
  },
  {
    image: FEATURE_IMAGES.overview,
    title: "Alles im Blick",
    text: "Die Verwaltung zeigt Anwesenheit, Beitragsstatus und Trainer-Aktivität in Echtzeit.",
  },
];

export function Home() {
  return (
    <main className="page">
      <div className="container">
        <section className="home-hero" aria-labelledby="home-title">
          <img
            className="home-hero__img"
            src="assets/photos/energetic-gym-interior-with-glowing-oran-7777269.jpg"
            alt="Modernes Fitnessstudio mit orange leuchtendem Licht und Trainingsgeräten"
            width={1280}
            height={720}
          />
          <div className="home-hero__overlay">
            <h1 id="home-title" className="home-hero__title">
              Icon <span>Fitness</span> Zone
            </h1>
            <p className="home-hero__text">
              Smarter Zutritt, schnelle Anmeldung und faire Pläne. Trainiere ohne Wartezeit und ohne Mitgliedskarte.
            </p>
            <div className="home-hero__actions">
              <a className="btn btn-primary" href="#/kiosk">Jetzt einchecken</a>
              <a className="btn" href="#/admin">Zur Verwaltung</a>
            </div>
          </div>
        </section>

        <section className="home-section" aria-labelledby="plans-title">
          <h2 id="plans-title" className="home-section__title">Unsere Pläne</h2>
          <p className="home-section__lead">Beispielpreise in Rupien pro Laufzeit. Je länger, desto günstiger.</p>
          <ul className="home-plans">
            {PLANS.map((plan) => (
              <li key={plan.id} className="card home-plan">
                <h3 className="home-plan__name">{plan.name}</h3>
                <p className="home-plan__price">₹{plan.price.toLocaleString("de-DE")}</p>
                <p className="home-plan__note">Voller Zugang, inkl. KI-Trainingsplan</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section" aria-labelledby="features-title">
          <h2 id="features-title" className="home-section__title">Was dich erwartet</h2>
          <div className="home-features">
            {features.map((f) => (
              <article key={f.title} className="card home-feature">
                <img
                  className="home-feature__img"
                  src={f.image.src}
                  alt={f.image.alt}
                  width={640}
                  height={480}
                  loading="lazy"
                />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="home-section__title">Einblicke ins Studio</h2>
          <p className="home-section__lead">Freihanteln, Cardio und persönliche Betreuung auf einer Fläche.</p>
          <ul className="home-gallery">
            {GALLERY.map((g) => (
              <li key={g.src} className="home-gallery__item">
                <img
                  className="home-gallery__img"
                  src={g.src}
                  alt={g.alt}
                  width={640}
                  height={480}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Home;
