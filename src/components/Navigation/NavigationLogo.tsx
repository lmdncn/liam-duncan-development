import { useNavigate } from "react-router-dom";
import { PERSONAL_INFO } from "@/lib/constants";

interface NavigationLogoProps {
  scrolled: boolean;
}

const NavigationLogo = ({ scrolled }: NavigationLogoProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-primary"
      onClick={() => navigate('/')}
    >
      <span className={scrolled ? 'text-foreground' : 'text-primary-foreground'}>
        {PERSONAL_INFO.name}
      </span>
    </div>
  );
};

export default NavigationLogo;