import Link from "next/link";
import { Section } from "../utils/Section";
import Carousel from "../[Carousel]/Carousel";

export const Hero = () => {
  return (
    <>
      <Section className="section justify-center max-lg:mt-20">
        <div className="flex-[3] flex flex-col gap-2 w-full p-4">
          <h2 className="text-4xl max-md:text-3xl font-semibold mb-8">
            L&apos;actu locale <span className="italic font-normal">par</span>{" "}
            et <span className="italic font-normal">pour</span> les habitants !
          </h2>
          <p className="paragraph mb-8">
            Vues d&apos;ici est un journal gratuit et indépendant soutenu par
            les habitants des quartiers Belleville, Jourdain, Buttes-Chaumonts
            et Place des Fêtes à Paris.
          </p>
          <div className="flex justify-evenly">
            <Link href="/articles" className="mediumButton">
              Trouver une édition papier
            </Link>
            <Link
              href="/association#nous-soutenir"
              className="mediumButton"
            >
              Nous soutenir
            </Link>
          </div>
        </div>
        <div className="flex-[2] flex justify-around items-center max-md:m-auto ml-auto">
          <Carousel />
        </div>
      </Section>
    </>
  );
};
