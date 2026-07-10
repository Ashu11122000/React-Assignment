import Container from "../common/Container";

import AnimatedBackground from "../ui/AnimatedBackground";
import FloatingShapes from "../ui/FloatingShapes";

import HeroContent from "./HeroContent";
import HeroCodeCard from "./HeroCodeCard";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      pt-32
      pb-20
      "
    >
      <AnimatedBackground />

      <FloatingShapes />

      <Container>
        <div
          className="
          grid
          items-center
          gap-12
          lg:grid-cols-2
          "
        >
          {/* Left */}

          <HeroContent />

          {/* Right */}

          <HeroCodeCard />
        </div>

        {/* Stats */}

        <div className="mt-20">
          <HeroStats />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
