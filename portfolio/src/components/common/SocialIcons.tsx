import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { cn } from "../../utils/cn";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Ashu11122000",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ashish-sharma-383439191",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ashu11vats@gmail.com",
    icon: MdEmail, 
  }
];

function SocialIcons({
  className,
  iconSize = 18,
}: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        const isExternal =
          social.href.startsWith("http") ||
          social.href.startsWith("mailto:");

        return (
          <a
            key={social.name}
            href={social.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={social.name}
            title={social.name}
            className={cn(
              "flex h-11 w-11 items-center justify-center",
              "rounded-full",
              "border border-slate-200",
              "bg-white/80 backdrop-blur-xl",
              "transition-all duration-300",
              "hover:-translate-y-1",
              "hover:border-indigo-500",
              "hover:bg-indigo-600",
              "hover:text-white",
              "hover:shadow-lg",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-indigo-500",
              "focus:ring-offset-2",
              "dark:border-slate-700",
              "dark:bg-slate-900/80",
              "dark:hover:bg-indigo-600",
              "dark:focus:ring-offset-slate-950",
            )}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;