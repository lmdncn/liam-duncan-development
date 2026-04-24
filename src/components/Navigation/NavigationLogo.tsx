import { Link } from "react-router";
import { PERSONAL_INFO } from "@/lib/constants";

const NavigationLogo = () => {
  return (
    <Link to="/" className="group flex items-center gap-2 cursor-pointer">
      <span className="font-display font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
        {PERSONAL_INFO.name}
      </span>
    </Link>
  );
};

export default NavigationLogo;
