import GradientText from "../ui/GradientText";

import SocialIcons from "../common/SocialIcons";

import HeroButtons from "./HeroButtons";

import { heroData } from "../../data/hero";


function HeroContent() {
  return (
    <div className="space-y-8">

      {/* Greeting */}

      <span
        className="
        inline-flex
        rounded-full
        border
        border-slate-700
        bg-slate-900/50
        px-4
        py-2
        text-sm
        text-slate-300
        backdrop-blur-xl
        "
      >
        {heroData.greeting}
      </span>


      {/* Name */}

      <h1
        className="
        text-5xl
        font-bold
        leading-tight
        md:text-6xl
        "
      >

        Ashish{" "}

        <GradientText>
          Sharma
        </GradientText>

      </h1>


      {/* Role */}

      <h2
        className="
        text-2xl
        font-semibold
        text-slate-300
        "
      >
        Aspiring{" "}
        <GradientText>
          {heroData.role}
        </GradientText>
      </h2>


      {/* Description */}

      <p
        className="
        max-w-xl
        leading-8
        text-slate-400
        "
      >
        {heroData.description}
      </p>


      {/* Buttons */}

      <HeroButtons />


      {/* Social */}

      <SocialIcons />

    </div>
  );
}

export default HeroContent;