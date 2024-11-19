import { Section } from "./utils/Section";
import Link from "next/link";
import Carousel from "./utils/Carousel/Carousel";

export const Hero = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-center justify-center gap-4 mt-4 max-lg:mt-20">
        <div className="flex-[3] flex flex-col gap-2 w-full">
          <h2 className="text-5xl font-caption">
            L&apos;actu locale par et pour les habitants
          </h2>
          <p>
            Vues d&apos;ici est un journal gratuit et indépendant soutenu par les
            habitants des quartiers Belleville, Jourdain, Buttes-Chaumonts et
            Place des Fêtes à Paris.
          </p>
        </div>
        <div className="flex-[2] flex justify-around items-center max-md:m-auto ml-auto">
          <Carousel />
        </div>
      </Section>
    </>
  );
};
