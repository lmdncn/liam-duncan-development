import { Link } from "react-router";
import { PERSONAL_INFO } from "@/lib/constants";

interface NavigationLogoProps {
  scrolled: boolean;
}

const NavigationLogo = ({ scrolled }: NavigationLogoProps) => {
  return (
    <Link 
      to="/"
      className="font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-primary"
    >
      <span className={scrolled ? 'text-foreground' : 'text-primary-foreground'}>
        {PERSONAL_INFO.name}
      </span>
    </Link>
  );
};

export default NavigationLogo;