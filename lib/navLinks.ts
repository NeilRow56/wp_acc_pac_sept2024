import { FileStack, Home, MapPin, SquareCheck, Users } from "lucide-react";

export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: Users,
  },
  {
    name: "Completion",
    href: "/dashboard/completion",
    icon: SquareCheck,
  },
  {
    name: "Planning",
    href: "/dashboard/planning",
    icon: MapPin,
  },
  {
    name: "Working Papers",
    href: "/dashboard/working_papers",
    icon: FileStack,
  },
];
