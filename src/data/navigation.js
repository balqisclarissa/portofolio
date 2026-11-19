
import {
  House,
  UserRound,
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  Mail
} from "lucide-react";

export const navigation = [
  {
    id: "home",
    label: "Home",
    icon: House,
    angle: -70
  },
  {
    id: "about",
    label: "About Me",
    icon: UserRound,
    angle: -42
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code2,
    angle: -14
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
    angle: 14
  },
  {
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
    angle: 42
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    angle: 70
  }
];
