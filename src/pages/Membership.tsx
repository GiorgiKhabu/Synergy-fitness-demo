import { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { gymService } from '../services/gymService';
import { Plan } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faq = [
  { question: 'Can I cancel anytime?', answer: 'Yes. Our membership plans are flexible and can be paused or canceled with a 30-day notice.' },
  { question: 'Is there a free trial?', answer: 'We offer a one-day guest pass so you can experience the facility before committing.' },
  { question: 'Do you offer student discounts?', answer: 'Student and military discounts are available when you visit our front desk for verification.' },
];

function Membership() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useScrollReveal();

  useEffect(() => {
    async function load() {
      setPlans(await gymService.getPlans());
    }
    load();
  }, []);

  return (
    <div className="page membership-page">
      <section className="section reveal membership-hero">
        <div className="container-slim">
          <span className="eyebrow">MEMBERSHIPS</span>
          <h1>Membership tiers built for commitment and elite recovery.</h1>
          <p>Choose the plan that fits your training volume, sport, and lifestyle without compromise.</p>
          <Button to="/classes">See Programs</Button>
        </div>
      </section>

      <section className="section reveal plans-section">
        <SectionHeading
          eyebrow="PLANS"
          title="Premium membership plans for every performance level"
          description="Each plan is designed to give you structure, support, and access to our best spaces."
        />
        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} className={`plan-card glass-panel ${plan.highlight ? 'plan-highlight' : ''}`}>
              <div className="plan-head">
                <span>{plan.name}</span>
                <h3>{plan.price}/mo</h3>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button to="/trainers">{plan.cta}</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal comparison-section">
        <SectionHeading
          eyebrow="COMPARISON"
          title="Compare membership access by plan"
          description="See which features are included at each level for better decision-making."
        />
        <div className="comparison-table">
          <div className="table-row header">
            <span>Feature</span>
            <span>Basic</span>
            <span>Standard</span>
            <span>Elite</span>
          </div>
          <div className="table-row">
            <span>Gym access</span>
            <span data-label="Basic">Unlimited</span>
            <span data-label="Standard">Unlimited</span>
            <span data-label="Elite">Unlimited</span>
          </div>
          <div className="table-row">
            <span>Group classes</span>
            <span data-label="Basic">2/week</span>
            <span data-label="Standard">4/week</span>
            <span data-label="Elite">Unlimited</span>
          </div>
          <div className="table-row">
            <span>Trainer consults</span>
            <span data-label="Basic">None</span>
            <span data-label="Standard">Monthly</span>
            <span data-label="Elite">Weekly</span>
          </div>
          <div className="table-row">
            <span>Recovery lounge</span>
            <span data-label="Basic">Standard</span>
            <span data-label="Standard">Priority</span>
            <span data-label="Elite">Elite</span>
          </div>
          <div className="table-row">
            <span>Guest passes</span>
            <span data-label="Basic">None</span>
            <span data-label="Standard">2/month</span>
            <span data-label="Elite">5/month</span>
          </div>
        </div>
      </section>

      <section className="section reveal faq-section">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions athletes ask most often"
          description="Get answers to membership, trial, and discount inquiries before your first visit."
        />
        <div className="faq-grid">
          {faq.map((item) => (
            <article key={item.question} className="faq-card glass-panel">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Membership;
