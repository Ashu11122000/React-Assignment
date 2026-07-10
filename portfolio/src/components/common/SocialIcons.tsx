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
    href: "https://github.com/Ashish11122000",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ashish-sharma-383439191",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "ashu11vats@gmail.com",
    icon: MdEmail,
  },
];

function SocialIcons({ className, iconSize = 18 }: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
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
              "dark:border-slate-700",
              "dark:bg-slate-900/80",
              "dark:hover:bg-indigo-600",
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
