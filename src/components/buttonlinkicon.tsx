import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface IconLinkButtonProps {
  label: string;
  link: string;
  icon?: LucideIcon;
}

function IconLinkButton({ label, link, icon: Icon }: IconLinkButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button className="flex items-center gap-2 px-6 py-3 text-base hover:bg-indigo-400 transition">
        {Icon && <Icon className="w-5 h-5 text-indigo-600" />}
        {label}
      </Button>
    </a>
  );
}
export default IconLinkButton;
