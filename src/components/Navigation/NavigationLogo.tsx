import { Link } from "react-router";
import { PERSONAL_INFO } from "@/lib/constants";

interface NavigationLogoProps {
  scrolled: boolean;
}

const NavigationLogo = ({ scrolled }: NavigationLogoProps) => {
  return (
    <Link
      to="/"
      className="font-bold text-xl cursor-pointer transition-all duration-300 hover:text-primary"
    >
      <span
        className={`transition-all duration-300 ${
          scrolled
            ? "text-foreground opacity-100"
            : "text-primary-foreground opacity-0"
        }`}
      >
        {PERSONAL_INFO.name}
      </span>
    </Link>
  );
};

export default NavigationLogo;
