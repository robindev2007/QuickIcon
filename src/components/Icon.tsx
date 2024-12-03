import { cn } from "@/lib/utils";
import { icons, LucideProps } from "lucide-react";

type IconProps = LucideProps & {
  name: string;
  className?: string;
};

const Icon = ({ name, color, size, className, ...props }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    // Fallback or error handling if the icon doesn't exist
    console.error(`Icon "${name}" not found in lucide-react.`);
    return null;
  }

  return (
    <LucideIcon
      className={cn(className)}
      color={color}
      size={size}
      {...props}
    />
  );
};

export default Icon;
