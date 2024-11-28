import Link from "next/link";
import { Section } from "../utils/Section";
import { Card } from "@/components/ui/card";

export const BackTheJournal = () => {
  return (
    <>
      <Section className="section justify-center">
        <Card className="p-4 gap-2 max-lg:mt-20">
          <h2 className="text-2xl mb-4">Soutenir le journal</h2>
          <p className="paragraph">
            Vous aimez l&apos;initiative et souhaitez investir dans Vues
            d&apos;Ici ?
          </p>
          <p className="paragraph mb-8">
            Vous pouvez choisir d&apos;adhérer à l&apos;association ou faire un
            don pour financer la prochaine édition, ainsi que rejoindre
            l&apos;équipe de rédaction !
          </p>
          <div className="flex justify-evenly">
            <Link
              href="/association#nous-soutenir"
              className="largeButton"
            >
              Nous soutenir
            </Link>
            <Link href="/contact" className="largeButton">
              Nous contacter
            </Link>
          </div>
        </Card>
      </Section>
    </>
  );
};
