import { HomeIcon, TreePine } from "lucide-react";
import Index from "./pages/Index.jsx";
import FamilyTree from "./pages/FamilyTree.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Family Tree",
    to: "/family-tree",
    icon: <TreePine className="h-4 w-4" />,
    page: <FamilyTree />,
  },
];
