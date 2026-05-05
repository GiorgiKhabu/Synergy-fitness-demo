import { useEffect, useMemo, useState } from "react";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import { gymService } from "../services/gymService";
import { Program } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

const filters = ["All", "Beginner", "Intermediate", "Advanced"] as const;

type FilterOption = (typeof filters)[number];

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");

  useScrollReveal();

  useEffect(() => {
    async function load() {
      setPrograms(await gymService.getPrograms());
    }
    load();
  }, []);

  const displayedPrograms = useMemo(
    () =>
      selectedFilter === "All"
        ? programs
        : programs.filter((program) => program.category === selectedFilter),
    [programs, selectedFilter],
  );

  return (
    <div className="page programs-page">
      <section className="section reveal programs-hero">
        <div className="container-slim">
          <span className="eyebrow">CLASSES & PROGRAMS</span>
          <h1>High-performance classes engineered for every goal.</h1>
          <p>
            Accelerate strength, endurance, mobility, and recovery with our
            curated training experiences.
          </p>
          <Button to="/trainers">Meet Trainers</Button>
        </div>
      </section>

      <section
        className="section reveal program-filters"
        style={{ paddingBottom: "0" }}
      >
        <SectionHeading
          eyebrow="PROGRAMS"
          title="Choose a training level"
          description="Find the right program for your current fitness level and performance focus."
        />
        <div className="filter-list">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-pill ${selectedFilter === filter ? "active" : ""}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="section reveal programs-grid">
        {displayedPrograms.map((program) => (
          <article
            key={program.id}
            className={`program-card glass-panel program-card-${program.category.toLowerCase()}`}
          >
            <div
              className="program-image"
              style={{ backgroundImage: `url(${program.image})` }}
            />
            <div className="program-body">
              <span
                className={`program-category category-${program.category.toLowerCase()}`}
              >
                {program.category}
              </span>
              <h3>{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <div className="program-meta">
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{program.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Intensity</span>
                  <span className="meta-value">{program.intensity}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Calories</span>
                  <span className="meta-value">{program.calories}</span>
                </div>
              </div>
              <div className="program-footer">
                <div className="trainer-info">
                  <span className="trainer-label">Trainer</span>
                  <span className="trainer-name">{program.trainer}</span>
                </div>
                <div className="schedule-info">
                  <span className="schedule-label">Schedule</span>
                  <span className="schedule-value">{program.schedule}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Programs;
