import {
  Brand,
  FacilityShowcase,
  GalleryImage,
  Plan,
  Program,
  StatCard,
  Trainer,
} from "../types";
import trainer from "../assets/images/trainer-1.jpg";
import box from "../assets/images/box.jpg";
import pilates from "../assets/images/pilates.jpg";
import gym1 from "../assets/images/gym-1.jpg";
import gym2 from "../assets/images/gym-2.webp";
import gym3 from "../assets/images/gym-3.webp";
import gym4 from "../assets/images/gym-4.webp";
import technoGym from "../assets/images/technogym.png";
import hammer from "../assets/images/hammer-strength.png";
import lifeFitness from "../assets/images/life-fitness.png";

const trainers: Trainer[] = [
  {
    id: "1",
    name: "Name",
    specialty: "Strength & Conditioning",
    experience: "12 years",
    quote: "Train harder. Recover smarter. Repeat.",
    certifications: ["NSCA-CSCS", "Precision Nutrition", "FRC Mobility"],
    philosophy: "Every session is engineered for progress and endurance.",
    stats: {
      transformations: "320+",
      clients: "105",
      successRate: "98%",
    },
    image: trainer,
    social: [{ name: "Instagram", url: "https://instagram.com" }],
  },
  {
    id: "2",
    name: "Name",
    specialty: "Boxing & HIIT",
    experience: "9 years",
    quote: "Power comes from rhythm, resilience, and focus.",
    certifications: ["USA Boxing", "TRX", "CPR/AED"],
    philosophy: "I build fighters — not just athletes.",
    stats: {
      transformations: "250+",
      clients: "89",
      successRate: "95%",
    },
    image: trainer,
    social: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "TikTok", url: "https://tiktok.com" },
    ],
  },
  {
    id: "3",
    name: "Name",
    specialty: "Pilates & Recovery",
    experience: "11 years",
    quote: "Recovery is the edge that makes performance sustainable.",
    certifications: ["STOTT Pilates", "Kinstretch", "Myofascial Release"],
    philosophy: "Motion, breath, and precision unlock strength.",
    stats: {
      transformations: "180+",
      clients: "74",
      successRate: "97%",
    },
    image: trainer,
    social: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "YouTube", url: "https://youtube.com" },
    ],
  },
];

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "₾120",
    description: "Essential access for ambitious beginners.",
    features: [
      "Unlimited gym access",
      "2 group classes/week",
      "Locker room access",
      "Standard support",
    ],
    cta: "Start Basic",
  },
  {
    id: "standard",
    name: "Standard",
    price: "₾175",
    description: "Balanced training for regular performance gains.",
    features: [
      "Unlimited gym access",
      "4 group classes/week",
      "1 trainer consult/month",
      "Recovery lounge access",
    ],
    cta: "Choose Standard",
    highlight: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: "₾220",
    description: "Complete premium access for elite athletes.",
    features: [
      "Unlimited gym access",
      "Unlimited group classes",
      "Weekly trainer sessions",
      "Guest passes included",
    ],
    cta: "Go Elite",
  },
];

const programs: Program[] = [
  {
    id: "strength",
    title: "Strength Training",
    category: "Intermediate",
    duration: "55 min",
    intensity: "High",
    calories: "650 kcal",
    trainer: "Name",
    schedule: "Mon • Wed • Fri",
    image:
      "https://images.unsplash.com/photo-1517964603305-417c1f0ba618?auto=format&fit=crop&w=900&q=80",
    description:
      "A heavy-lift program designed to build power, structural strength, and athletic durability.",
  },
  {
    id: "boxing",
    title: "Boxing",
    category: "Advanced",
    duration: "50 min",
    intensity: "Extreme",
    calories: "720 kcal",
    trainer: "Name",
    schedule: "Tue • Thu • Sat",
    image:
      "https://images.unsplash.com/photo-1517964603305-417c1f0ba619?auto=format&fit=crop&w=900&q=80",
    description:
      "Precision striking, conditioning, and tactical footwork for fast-paced sessions.",
  },
  {
    id: "pilates",
    title: "Pilates",
    category: "Beginner",
    duration: "45 min",
    intensity: "Medium",
    calories: "360 kcal",
    trainer: "Name",
    schedule: "Mon • Wed • Sat",
    image:
      "https://images.unsplash.com/photo-1526401281623-77aa68849a65?auto=format&fit=crop&w=900&q=80",
    description:
      "Focused alignment and mobility work to improve posture, resilience, and recovery.",
  },
  {
    id: "hiit",
    title: "HIIT",
    category: "Advanced",
    duration: "40 min",
    intensity: "Extreme",
    calories: "780 kcal",
    trainer: "Name",
    schedule: "Tue • Thu • Fri",
    image:
      "https://images.unsplash.com/photo-1546484959-f2c19a7021fb?auto=format&fit=crop&w=900&q=80",
    description:
      "All-out metabolic sessions that sculpt the body and raise endurance quickly.",
  },
  {
    id: "mobility",
    title: "Mobility & Recovery",
    category: "Beginner",
    duration: "50 min",
    intensity: "Low",
    calories: "240 kcal",
    trainer: "Name",
    schedule: "Sat • Sun",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    description:
      "Restore movement quality with breathwork, foam rolling, and targeted stretching.",
  },
];

const brands: Brand[] = [
  {
    id: "technogym",
    name: "Technogym",
    logo: technoGym,
  },
  {
    id: "hammer",
    name: "Hammer Strength",
    logo: hammer,
  },
  {
    id: "life-fitness",
    name: "Life Fitness",
    logo: lifeFitness,
  },
];

const gallery: GalleryImage[] = [
  {
    id: "g1",
    title: "Wake-up training zone",
    image: pilates,
  },
  {
    id: "g2",
    title: "Training area",
    image: gym1,
  },
  {
    id: "g3",
    title: "Combat and boxing studio",
    image: box,
  },
];

const facilityShowcase: FacilityShowcase[] = [
  {
    id: "f2",
    title: "Training area",
    coverImage: gym1,
    images: [gym3, gym2, gym4],
  },
  {
    id: "f1",
    title: "Wake-up training zone",
    coverImage: pilates,
    images: [pilates, pilates, pilates],
  },

  {
    id: "f3",
    title: "Combat and boxing studio",
    coverImage: box,
    images: [box, box],
  },
];

const stats: StatCard[] = [
  { id: "s1", label: "Members", value: "2,400+" },
  { id: "s2", label: "Certified Trainers", value: "28" },
  { id: "s3", label: "Weekly Classes", value: "65" },
  { id: "s4", label: "Years of Experience", value: "14" },
];

export const gymService = {
  getTrainers: async () => trainers,
  getPlans: async () => plans,
  getPrograms: async () => programs,
  getBrands: async () => brands,
  getGallery: async () => gallery,
  getStats: async () => stats,
  getFacilityShowcase: async () => facilityShowcase,
};
