/**
 * ==========================================================
 * Social Links
 * ==========================================================
 *
 * Centralized social/contact links.
 *
 * ==========================================================
 */

import { Globe, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import type { SocialLink } from "../types/common";

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:your@email.com",
    icon: Mail,
  },
  {
    id: 4,
    name: "Portfolio",
    url: "https://yourportfolio.com",
    icon: Globe,
  },
];

export default socialLinks;