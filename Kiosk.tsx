import { useEffect, useState } from "react";
import { MEMBERS } from "../data/menu";
import "./Kiosk.css";

type Step = "idle" | "scanning" | "blink" | "done";

const STEP_TEXT: Record<Step, string> = {
  idle: "Bereit für den Scan",
  scanning: "Gesicht wird erkannt …",
  blink: "Bitte einmal blinzeln (Lebendprüfung)",
  done: "Check-in erfolgreich",
};

export function Kiosk() {
  const [step, setStep] = useState<Step>("idle");
  const [index, setIndex] = useState(0);
  const member = MEMBERS[index % MEMBERS.length];

  useEffect(() => {
    if (step === "scanning") {
      const t = setTimeout(() => setStep("blink"), 1500);
      return () => clearTimeout(t);
    }
    if (step === "blink") {
      const t = setTimeout(() => setStep("done"), 1800);
      return () => clearTimeout(t);
    }
    if (step === "done") {
      const t = setTimeout(() => {
        setStep("idle");
        setIndex((i) => i + 1);
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [step]);

  const due = member.status === "due";

  return (
    <main className="page kiosk">
      <div className="container kiosk-grid">
        <section className="kiosk-intro">
          <h1 className="page-title">Kein Gesicht, kein Eintritt</h1>
          <p className="kiosk-lead">
            Schauen Sie in die Kamera. Wir prüfen per Blinzeltest, dass wirklich Sie vor dem Gerät stehen, und
            buchen Ihren Check-in automatisch.
          </p>
          <button
            type="button"
            className="btn btn-primary kiosk-btn"
            onClick={() => setStep("scanning")}
            disabled={step !== "idle"}
          >
            Scan starten
          </button>
        </section>

        <section className="card kiosk-scan" aria-live="polite">
          <div className={`kiosk-frame kiosk-${step}`}>
            <div className="kiosk-face" aria-hidden="true">
              <span className="kiosk-eye" />
              <span className="kiosk-eye" />
            </div>
            <span className="kiosk-line" aria-hidden="true" />
          </div>
          <p className="kiosk-status">{STEP_TEXT[step]}</p>

          {step === "done" && (
            <div className={`kiosk-result ${due ? "is-due" : "is-ok"}`}>
              <strong>Willkommen, {member.name}!</strong>
              <span>Tarif: {member.plan}</span>
              <span>
                Beitrag: {due ? "Offen" : "Bezahlt"} · Nächste Fälligkeit: {member.nextDue}
              </span>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Kiosk;
