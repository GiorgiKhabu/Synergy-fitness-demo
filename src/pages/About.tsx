import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import { gymService } from "../services/gymService";
import { Brand, FacilityShowcase, GalleryImage, StatCard } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

function About() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [stats, setStats] = useState<StatCard[]>([]);
  const [facilityShowcase, setFacilityShowcase] = useState<FacilityShowcase[]>(
    [],
  );

  useScrollReveal();

  useEffect(() => {
    async function load() {
      setBrands(await gymService.getBrands());
      setGallery(await gymService.getGallery());
      setStats(await gymService.getStats());
      setFacilityShowcase(await gymService.getFacilityShowcase());
    }
    load();
  }, []);

  return (
    <div className="page about-page">
      <section className="section reveal about-hero">
        <div className="about-hero-content container-slim">
          <span className="eyebrow">OUR STORY</span>
          <h1>Where performance, craftsmanship, and community unite.</h1>
          <p>
            Synergy is a premium fitness club built for athletes who demand more
            than a workout. Every space, program, and coach is curated to
            deliver strength, mobility, and purpose.
          </p>
          <Button to="/membership">Start Your Journey</Button>
        </div>
      </section>

      <section className="section reveal">
        <SectionHeading
          eyebrow="MISSION & VISION"
          title="Purpose-driven impact for every athlete"
          description="We create an environment where training feels inspiring, recovery is central, and lasting progress is inevitable."
        />
        <div className="about-grid">
          <article className="glass-panel facility-card">
            <h3>Mission</h3>
            <p>
              Empower every member to move, recover, and perform at their
              personal best through science-driven coaching and premium training
              zones.
            </p>
          </article>
          <article className="glass-panel facility-card">
            <h3>Vision</h3>
            <p>
              To become the most respected training destination for athletes and
              wellness seekers who value intensity, aesthetics, and longevity.
            </p>
          </article>
          <article className="glass-panel facility-card">
            <h3>Values</h3>
            <p>
              Precision, consistency, community, innovation, and resilience
              inform every decision in our facility.
            </p>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <SectionHeading
          eyebrow="EQUIPMENT PARTNERS"
          title="Premium fitness brands powering Synergy"
          description="We equip our gym with top-tier machines and systems trusted by elite athletes around the world."
        />
        <div className="brand-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-card glass-panel">
              <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section reveal stats-section">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="Numbers that reflect the Synergy experience"
          description="Our community thrives on real progress, expert coaching, and premium facilities."
        />
        <div className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.id} className="stat-card glass-panel">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal gallery-showcase">
        <SectionHeading
          title="Facility Showcase"
          description="Premium training spaces with immersive lighting, engineered
              performance surfaces, and advanced recovery tools."
        />
        <div className="gallery-thumbs container-slim reveal">
          {facilityShowcase.map((item) => (
            <div>
              <p>{item.title}</p>
              <div key={item.id} className="complex-grid-layout">
                <img
                  className="cover-image"
                  key={1}
                  src={item.coverImage}
                  alt={item.title}
                />
                {item.images.map((img, index) => (
                  <img key={index} src={img} alt={item.title} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
