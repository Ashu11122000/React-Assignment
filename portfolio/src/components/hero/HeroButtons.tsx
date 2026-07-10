import {
  ArrowRight,
} from "lucide-react";

import Button from "../common/Button";

import { heroData } from "../../data/hero";


function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">

      <Button
        size="lg"
        rightIcon={
          <ArrowRight size={18} />
        }
      >
        {heroData.buttons.primary}
      </Button>


      <Button
        variant="outline"
        size="lg"
        rightIcon={
          <ArrowRight size={18} />
        }
      >
        {heroData.buttons.secondary}
      </Button>

    </div>
  );
}

export default HeroButtons;