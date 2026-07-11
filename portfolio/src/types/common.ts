import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

/**
 * Social link.
 */
export interface SocialLink {
  id: number;
  name: string;
  url: string;

  /**
   * Supports both Lucide React icons
   * and React Icons.
   */
  icon: LucideIcon | IconType;
}
