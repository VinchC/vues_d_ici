import { Section } from "./utils/Section";
import Link from "next/link";
import { Slider } from "./utils/Slider";

export const Hero = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-center gap-4">
        <div className="flex-[3] flex flex-col gap-2 w-full">
          <h2 className="text-5xl font-caption">
            L&apos;actu locale par et pour les habitants
          </h2>
          <p>
            Vues d&apos;ici est un journal et indépendant soutenu par les
            habitants des quartiers Belleville, Jourdain, Butts-Chaumonts et
            Place des Fêtes à Paris.
          </p>
        </div>
        <div className="flex-[2] flex justify-around max-md:m-auto ml-auto">
          <Slider />
        </div>
      </Section>
    </>
  );
};
