import { type ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

function SectionHeading({ eyebrow, title, description, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
      {children}
    </div>
  );
}

export default SectionHeading;
