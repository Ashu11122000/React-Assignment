import GlassCard from "../ui/GlassCard"

import { heroData } from "../../data/hero";

function HeroCodeCard() {
  return (
    <GlassCard
      className="
      p-6
      font-mono
      text-sm
      "
    >
      <div className="space-y-3">
        <p>
          <span className="text-pink-400">const</span> developer = {"{"}
        </p>

        <p className="pl-5">
          <span className="text-red-400">name:</span> "{heroData.codeCard.name}
          ",
        </p>

        <p className="pl-5">
          <span className="text-green-400">role:</span> "
          {heroData.codeCard.role}",
        </p>

        <p className="pl-5">
          <span className="text-blue-400">skills:</span> [
        </p>

        {heroData.codeCard.skills.map((skill) => (
          <p key={skill} className="pl-10 text-cyan-300">
            "{skill}",
          </p>
        ))}

        <p className="pl-5">],</p>

        <p className="pl-5">
          <span className="text-yellow-400">passion:</span> "
          {heroData.codeCard.passion}",
        </p>

        <p className="pl-5">
          <span className="text-purple-400">goal:</span> "
          {heroData.codeCard.goal}"
        </p>

        <p>{"}"}</p>
      </div>
    </GlassCard>
  );
}

export default HeroCodeCard;
