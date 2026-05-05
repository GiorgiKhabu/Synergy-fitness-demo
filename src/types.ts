export type Trainer = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  quote: string;
  certifications: string[];
  philosophy: string;
  stats: {
    transformations: string;
    clients: string;
    successRate: string;
  };
  image: string;
  social: {
    name: string;
    url: string;
  }[];
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export type Program = {
  id: string;
  title: string;
  category: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  intensity: string;
  calories: string;
  trainer: string;
  schedule: string;
  image: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  review: string;
  program: string;
  avatar: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  image: string;
};

export type FacilityShowcase = {
  id: string;
  title: string;
  coverImage: string;
  images: string[];
};

export type StatCard = {
  id: string;
  label: string;
  value: string;
};
