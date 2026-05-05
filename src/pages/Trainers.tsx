import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import { gymService } from "../services/gymService";
import { Trainer } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Trainers() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [selected, setSelected] = useState<Trainer | null>(null);

  useScrollReveal();

  useEffect(() => {
    async function load() {
      setTrainers(await gymService.getTrainers());
    }
    load();
  }, []);

  return (
    <div className="page trainers-page">
      <section className="section reveal trainers-hero">
        <div className="container-slim">
          <span className="eyebrow">TRAINERS</span>
          <h1>Meet the coaches behind every achievement.</h1>
          <p>
            Elite expertise, strategic guidance, and proven training
            philosophies in every session.
          </p>
          <Button to="/membership">Membership Plans</Button>
        </div>
      </section>

      <section className="section reveal trainer-grid-section">
        <SectionHeading
          eyebrow="PROFILES"
          title="Professional trainers engineered for modern athletes"
          description="Browse coach specialties and discover the right partner for your next training phase."
        />
        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <article key={trainer.id} className={`trainer-card glass-panel`}>
              <div
                className="trainer-image"
                style={{ backgroundImage: `url(${trainer.image})` }}
              />
              <div className="trainer-body">
                <span
                  className={`trainer-tag tag-${trainer.specialty.toLowerCase().split(" ")[0]}`}
                >
                  {trainer.specialty}
                </span>
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-experience">{trainer.experience}</p>
                <p className="trainer-philosophy">{trainer.philosophy}</p>
                <div className="trainer-footer">
                  <button
                    type="button"
                    className="button button-ghost"
                    onClick={() => setSelected(trainer)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="trainer-name"
        >
          <div className="modal-panel glass-panel">
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <div className="modal-content">
              <div
                className="modal-image"
                style={{ backgroundImage: `url(${selected.image})` }}
              />
              <div className="modal-copy">
                <span className="eyebrow">Trainer Spotlight</span>
                <h2 id="trainer-name">{selected.name}</h2>
                <p>
                  {selected.specialty} • {selected.experience}
                </p>
                <p>{selected.quote}</p>
                <h4>Philosophy</h4>
                <p>{selected.philosophy}</p>
                <h4>Certifications</h4>
                <ul>
                  {selected.certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="trainer-stats">
                  <span>{selected.stats.transformations} transformations</span>
                  <span>{selected.stats.clients} clients</span>
                  <span>{selected.stats.successRate} success rate</span>
                </div>
                <div className="social-links">
                  {selected.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trainers;
