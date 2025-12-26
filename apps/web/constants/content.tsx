import { BarChart3, Leaf, Gauge, LineChart, Sun } from "lucide-react";
import type { ContentSection, RoadmapItem } from "@/types";

export const CONTENT_SECTIONS: ContentSection[] = [
  {
    id: "benchmarking",
    title: "Benchmarking",
    subtitle: "Baseline & Insight",
    description: "Establish a comprehensive understanding of your current energy consumption patterns. Through detailed analysis of utility data and facility operations, we create a clear baseline that informs every subsequent decision in your energy strategy.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    id: "conservation",
    title: "Energy Conservation",
    subtitle: "Operational Optimization",
    description: "Implement behavioral and operational changes that reduce energy waste without capital investment. By optimizing schedules, setpoints, and procedures, organizations typically achieve significant reductions in energy consumption.",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    id: "efficiency",
    title: "Energy Efficiency",
    subtitle: "System Performance",
    description: "Upgrade and modernize building systems to achieve optimal performance. From lighting retrofits to HVAC optimization, these investments deliver lasting improvements in energy productivity and occupant comfort.",
    icon: <Gauge className="w-6 h-6" />,
  },
  {
    id: "demand",
    title: "Demand Management",
    subtitle: "Load & Cost Control",
    description: "Take control of when and how your facility uses energy. Strategic load management reduces peak demand charges and positions your organization to participate in utility incentive programs and demand response initiatives.",
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    id: "renewables",
    title: "Renewables",
    subtitle: "Clean Energy Integration",
    description: "Integrate clean energy solutions that align with your sustainability goals and financial objectives. Whether through on-site generation, power purchase agreements, or renewable energy credits, we help you navigate the path to decarbonization.",
    icon: <Sun className="w-6 h-6" />,
  },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Benchmarking",
    subtitle: "Baseline & Insight",
    targetId: "benchmarking",
    href: "/benchmarking",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Energy Conservation",
    subtitle: "Operational Optimization",
    targetId: "conservation",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Energy Efficiency",
    subtitle: "System Performance",
    targetId: "efficiency",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Demand Management",
    subtitle: "Load & Cost Control",
    targetId: "demand",
  },
  {
    icon: <Sun className="w-5 h-5" />,
    title: "Renewables",
    subtitle: "Clean Energy Integration",
    targetId: "renewables",
  },
];