import {
  Globe,
  Terminal,
  BrainCircuit,
  Database,
  Network,
  Layers,
  GraduationCap,
  BriefcaseBusiness,
  Code2
} from "lucide-react";

import { SiHtml5, SiCss, SiReact } from "react-icons/si";

export const profile = {
  name: "Balqis Rahma Clarissa",
  role: "Informatics Student",
  tagline: "I’m still learning, exploring, and figuring things out through technology and the projects I create.",
  email: "balqisrahmaclarissa@gmail.com",
  github: "https://github.com/balqisclarissa",
  linkedin: "www.linkedin.com/in/balqis-rahma-clarissa",
  cv: "/cv.pdf"
};

export const skills = [
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React.js", slug: "react" },
  { name: "Python", slug: "python" },
  { name: "PHP", slug: "php" },
  {name: "C++", slug: "cplusplus" },
  {name: "C", slug: "c" },
  { name: "MySQL", slug: "mysql" },
  { name: "Figma", slug: "figma" },
];

export const projects = [
  {
    id: 1,
   title: "Cryptocurrency Patterned Dataset Mining",
    category: "Data Mining",
    icon: "◈",
    color: "pink",
    description:
      "A website that stores daily Bitcoin data from Indodax",
    details:
      "Penelitian time-series forecasting untuk Bitcoin, Ethereum, dan Solana.",
    tech: ["PHP", "MySQL"],
    github: "https://github.com/balqisclarissa/crypto-indodax"
  },
  {
    id: 2,
    title: "UI/UX Design for An Attendance Application",
    category: "UI/UX Design",
    icon: "⌘",
    color: "cyan",
    description:
      "An attendance app called Attendify, designed using Figma.",
    details:
      "Penelitian mengenai pengaruh penanganan ketidakseimbangan kelas menggunakan Baseline, SMOTE, dan ADASYN pada klasifikasi BENIGN dan ATTACK.",
    tech: ["Figma"],
    prototype: "https://www.figma.com/proto/MkK1gFjCLyrXzFNf7Yb7VQ/ATTENDIFY?node-id=103-147&starting-point-node-id=103%3A147&t=dQNpjE5geY9VzVoA-1"
  },
  {
    id: 3,
    title: "Complaint System Website",
    category: "Web Development",
    icon: "◈",
    color: "pink",
    description:
      "A website for managing and submitting complaints.",
    details:
      "Penelitian time-series forecasting untuk Bitcoin, Ethereum, dan Solana.",
    tech: ["PHP", "CSS"],
    github: "https://github.com/balqisclarissa/sistem-pengaduan"
  },
];

export const experiences = [
  {
    type: "Education",
    title: "Informatics Student",
    place: "Universitas Pembangunan Nasional Veteran Jawa Timur",
    date: "Current",
    icon: GraduationCap
  },
  {
    type: "Organization",
    title: "UKM Penalaran dan Kreativitas",
    place: "Organization Activities",
    date: "2024 - 2025",
    icon: BriefcaseBusiness
  },
];
