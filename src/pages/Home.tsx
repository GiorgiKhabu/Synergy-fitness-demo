import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import { gymService } from "../services/gymService";
import { Trainer, Brand, GalleryImage, Plan } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

const benefitCards = [
  {
    title: "Modern equipment",
    description: "Technogym, Hammer Strength, and top-tier resistance systems.",
    icon: "⚡",
  },
  {
    title: "Certified trainers",
    description: "Expert coaches for boxing, pilates, strength, and recovery.",
    icon: "🏋️",
  },
  {
    title: "Personalized programs",
    description: "Programs built around your goals and performance data.",
    icon: "🎯",
  },
  {
    title: "Nutrition support",
    description: "Premium fuel plans and recovery nutrition guidance.",
    icon: "🥗",
  },
  {
    title: "Community atmosphere",
    description: "High-energy spaces engineered for focus and connection.",
    icon: "🔥",
  },
];

function Home() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  useScrollReveal();

  useEffect(() => {
    async function load() {
      setTrainers(await gymService.getTrainers());
      setPlans(await gymService.getPlans());
      setGallery(await gymService.getGallery());
      setBrands(await gymService.getBrands());
    }
    load();
  }, []);

  return (
    <div className="page home-page">
      <section className="hero-section reveal">
        <div className="hero-overlay" />
        <div className="hero-content container-slim">
          <h1>Forge Your Strongest Self.</h1>
          <p>
            Step into Synergy where premium training, recovery, and elite
            coaching converge in a bold dark space designed for next-level
            performance.
          </p>
          <div className="hero-actions">
            <Button to="/membership">Join Now</Button>
            <Link className="link-secondary" to="/classes">
              View Classes
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              <h3>70+</h3>
              <p>Weekly classes</p>
            </div>
            <div>
              <h3>28</h3>
              <p>Elite trainers</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Dedicated zones</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section section-benefits reveal">
        <SectionHeading
          eyebrow="MAIN VALUE"
          title="Premium fitness benefits engineered for results"
          description="From cinematic training spaces to recovery and nutrition support, every feature is built for high-performance lifestyles."
        />
        <div className="benefits-grid">
          {benefitCards.map((item) => (
            <article key={item.title} className="benefit-card glass-panel">
              <span className="benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section> */}
      <section className="section section-gallery reveal">
        <SectionHeading
          eyebrow="FACILITY PREVIEW"
          title="Explore the Synergy environment"
          description="A premium atmosphere with dedicated zones for strength, combat, and recovery."
        />
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="brand-strip">
          {brands.map((brand) => (
            <span key={brand.id} className="brand-chip">
              {brand.name}
            </span>
          ))}
        </div>
      </section>

      <section className="section section-trainers reveal">
        <SectionHeading
          eyebrow="TRAIN WITH THE BEST"
          title="Featured trainers shaping every program"
          description="Elite coaches who deliver tailored strategy, intensity, and recovery guidance."
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
                <blockquote className="trainer-quote">
                  "{trainer.quote}"
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-membership-preview reveal">
        <SectionHeading
          eyebrow="MEMBERSHIP HIGHLIGHTS"
          title="Choose the level that fits your ambition"
          description="Flexible plans for newcomers, consistent athletes, and competitors pushing toward their peak."
        />
        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`plan-card glass-panel ${plan.highlight ? "plan-highlight" : ""}`}
            >
              <div className="plan-head">
                <span>{plan.name}</span>
                <h3>{plan.price}</h3>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? "primary" : "ghost"}
                to="/membership"
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
