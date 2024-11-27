"use client";

import { Card } from "@/components/ui/card";
import { Spacing } from "../_components/utils/Spacing";
import { Section } from "../_components/utils/Section";
import SupportComponent from "../_components/[Association]/SupportComponent";
import { ASSOCIATION } from "../data/data";

export default function AssociationPage() {
  return (
    <>
      <Spacing size="sm" />
      <Section className="section justify-center mt-8 max-lg:mt-20">
        <Card className="p-4 gap-2">
          <h2 className="h2Title">L&apos;association Vues d&apos;ici</h2>
          <p className="paragraph">
            Le journal de quartier Vues d’ici est une publication locale,
            indépendante et gratuite, mise en place bénévolement par les
            habitants des quartiers Belleville, Jourdain, Buttes- Chaumont et
            Place des Fetes à Paris. L’impression est financée par les
            cotisations à l’association, les encarts publicitaires et les dons
            libres.
          </p>
          <p className="paragraph">
            Vous pouvez nous soutenir de plusieurs façon: en adhérant à
            l’association, en rejoignant l’équipe on en faisant un don.
          </p>
        <div className="grid grid-cols-2 max-sm:block items-center gap-8">
        {ASSOCIATION.map((e, index) => (
          <SupportComponent key={index} {...e} />
        ))}
        </div>
        </Card>
      </Section>
    </>
  );
}
