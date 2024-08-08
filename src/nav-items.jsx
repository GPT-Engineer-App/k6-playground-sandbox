import { Home, Info, Paw, Camera } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Breeds from "./pages/Breeds.jsx";
import Gallery from "./pages/Gallery.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Breeds",
    to: "/breeds",
    icon: <Paw className="h-4 w-4" />,
    page: <Breeds />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Camera className="h-4 w-4" />,
    page: <Gallery />,
  },
];
