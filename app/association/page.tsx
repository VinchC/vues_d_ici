"use client";

import { Card } from "@/components/ui/card";
import { Spacing } from "../_components/utils/Spacing";
import { Section } from "../_components/utils/Section";
import SupportComponent from "../_components/[Association]/SupportComponent";
import { ASSOCIATION, CHARTER } from "../../data/data";
import Charter from "../_components/[Association]/Charter";

export default function AssociationPage() {
  return (
    <>
      <Spacing size="sm" />
      <Section className="section">
        <Card className="cardBase">
          <h2 className="h2Title">L&apos;association Vues d&apos;ici</h2>
          <p className="paragraph">
            Le journal de quartier Vues d’ici est une publication locale,
            indépendante et gratuite, mise en place bénévolement par les
            habitants des quartiers Belleville, Jourdain, Buttes- Chaumont et
            Place des Fetes à Paris. L’impression est financée par les
            cotisations à l’association, les encarts publicitaires et les dons
            libres.
          </p>
          <p id="nous-soutenir" className="paragraph">
            Vous pouvez nous soutenir de plusieurs façon: en adhérant à
            l’association, en rejoignant l’équipe on en faisant un don.
          </p>
          <div className="grid grid-cols-2 max-sm:block items-center gap-8">
            {ASSOCIATION.map((e, index) => (
              <SupportComponent key={index} {...e} />
            ))}
          </div>
          <h3 className="h3Title" id="nous-rejoindre">
            Nous rejoindre
          </h3>
          <p className="paragraph">
            Vous souhaitez vous impliquer de manière plus régulière dans la
            publication du journal? Nos réunions de rédaction sont ouvertes à
            tous.tes; pour connaître la date de la prochaine, rendez-vous sur
            notre compte instagram ou contactez-nous!
          </p>
          <p className="paragraph">
            Nous sommes à la recherche de Rédacteur, Photographe, Contributeur
            d’idées, Coordinateur éditorial, Relecteur, Animateur du groupe,
            Contact pub, Maquettiste, Coordinateur de l’impression, Distributeur
            des exemplaires papier, Animateur des réseaux sociaux.
          </p>
          <h3 className="h3Title">Notre charte</h3>
          {CHARTER.map((e, index) => (
            <Charter key={index} {...e} />
          ))}
        </Card>
      </Section>
    </>
  );
}
