import { Section } from "./utils/Section";
import Link from "next/link";
import Carousel from "./utils/Carousel/Carousel";

export const Hero = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-center justify-center gap-4 mt-4 max-lg:mt-20">
        <div className="flex-[3] flex flex-col gap-2 w-full p-4">
          <h2 className="text-4xl max-md:text-3xl font-semibold">
            L&apos;actu locale <span className="italic font-normal">par</span>{" "}
            et <span className="italic font-normal">pour</span> les habitants !
          </h2>
          <p className="paragraph">
            Vues d&apos;ici est un journal gratuit et indépendant soutenu par
            les habitants des quartiers Belleville, Jourdain, Buttes-Chaumonts
            et Place des Fêtes à Paris.
          </p>
          <div className="flex justify-evenly">
            <Link href="/articles" className="button">
              Trouver une édition papier
            </Link>
            <Link
              href="/association-vues-d-ici#nous-soutenir"
              className="button"
            >
              Nous soutenir
            </Link>
          </div>
        </div>
        <div className="flex-[2] flex justify-around items-center max-md:m-auto ml-auto">
          <Carousel />
        </div>
      </Section>
      <Section>
        
      </Section>
    </>
  );
};
