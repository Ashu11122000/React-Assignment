import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import { heroData } from "../../data/hero";

function HeroButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        size="lg"
        rightIcon={<ArrowRight size={18} />}
        onClick={() => navigate("/projects")}
      >
        {heroData.buttons.secondary}
      </Button>
    </div>
  );
}

export default HeroButtons;
