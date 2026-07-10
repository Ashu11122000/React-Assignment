import {
  Code2,
  Folder,
  Layers,
  Star,
} from "lucide-react";


import GlassCard from "../ui/GlassCard";

import { heroStats } from "../../data/stats";


const icons = {
  code: Code2,
  folder: Folder,
  layers: Layers,
  star: Star,
};


function HeroStats() {

  return (

    <div
      className="
      grid
      gap-4
      sm:grid-cols-2
      lg:grid-cols-4
      "
    >

      {
        heroStats.map(
          (item) => {

            const Icon =
              icons[
                item.icon as keyof typeof icons
              ];

            return (

              <GlassCard
                key={item.label}
                className="p-5"
              >

                <Icon
                  className="
                  mb-4
                  text-indigo-400
                  "
                />


                <h3
                  className="
                  text-3xl
                  font-bold
                  "
                >
                  {item.value}
                </h3>


                <p
                  className="
                  text-sm
                  text-slate-400
                  "
                >
                  {item.label}
                </p>


              </GlassCard>

            );
          }
        )
      }

    </div>

  );
}


export default HeroStats;