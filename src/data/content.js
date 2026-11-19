
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

export const profile = {
  name: "Balqis Rahma Clarissa",
  role: "Informatics Student",
  tagline:
    "Exploring technology, building creative ideas, and transforming them into meaningful digital experiences.",
  email: "your.email@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  cv: "/cv.pdf"
};

export const skills = [
  {
    title: "Frontend Development",
    icon: Globe,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]
  },
  {
    title: "Programming",
    icon: Terminal,
    items: ["Python", "PHP", "JavaScript"]
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    items: ["TensorFlow", "Scikit-learn", "CNN", "Random Forest"]
  },
  {
    title: "Database",
    icon: Database,
    items: ["SQL", "MySQL"]
  },
  {
    title: "Networking",
    icon: Network,
    items: ["Wireshark", "iPerf3", "Network Analysis"]
  },
  {
    title: "Tools",
    icon: Layers,
    items: ["VS Code", "Git", "GitHub", "Google Colab"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Sundanese Script Recognition",
    category: "Machine Learning",
    icon: "✦",
    color: "violet",
    description:
      "Pengenalan Aksara Sunda menggunakan CNN dan Transfer Learning VGG-16.",
    details:
      "Proyek klasifikasi citra Aksara Sunda menggunakan preprocessing gambar, VGG-16 pretrained ImageNet, baseline training, dan fine-tuning.",
    tech: ["Python", "TensorFlow", "CNN", "VGG-16"],
    github: ""
  },
  {
    id: 2,
    title: "Network Intrusion Detection",
    category: "Cybersecurity",
    icon: "⌘",
    color: "cyan",
    description:
      "Analisis Random Forest untuk deteksi intrusi jaringan.",
    details:
      "Penelitian mengenai pengaruh penanganan ketidakseimbangan kelas menggunakan Baseline, SMOTE, dan ADASYN pada klasifikasi BENIGN dan ATTACK.",
    tech: ["Python", "Random Forest", "CIC-IDS2017"],
    github: ""
  },
  {
    id: 3,
    title: "Cryptocurrency Price Prediction",
    category: "Machine Learning",
    icon: "◈",
    color: "pink",
    description:
      "Perbandingan model PatchTST dan iTransformer untuk prediksi harga cryptocurrency.",
    details:
      "Penelitian time-series forecasting untuk Bitcoin, Ethereum, dan Solana.",
    tech: ["Python", "PatchTST", "iTransformer"],
    github: ""
  },
  {
    id: 4,
    title: "Wi-Fi Performance Analysis",
    category: "Networking",
    icon: "◎",
    color: "blue",
    description:
      "Analisis kualitas jaringan Wi-Fi berdasarkan throughput, latency, dan packet loss.",
    details:
      "Pengukuran dan analisis performa jaringan menggunakan iPerf3 dan Wireshark.",
    tech: ["iPerf3", "Wireshark", "Networking"],
    github: ""
  }
];

export const experiences = [
  {
    type: "Education",
    title: "Informatics Student",
    place: "Universitas Pembangunan Nasional Veteran Jawa Timur",
    date: "Current",
    description:
      "Mempelajari programming, software development, machine learning, database, dan computer networking.",
    icon: GraduationCap
  },
  {
    type: "Organization",
    title: "UKM Penalaran dan Kreativitas",
    place: "Organization Activities",
    date: "Add your period",
    description:
      "Terlibat dalam pengelolaan website, dokumentasi, publikasi, dan kegiatan organisasi.",
    icon: BriefcaseBusiness
  },
  {
    type: "Experience",
    title: "Backend Developer Internship",
    place: "PT PLN (Persero) UPDL Surabaya",
    date: "Add your period",
    description:
      "Pengembangan aplikasi web, pembuatan API, pengelolaan database, dan pengujian aplikasi.",
    icon: Code2
  }
];
