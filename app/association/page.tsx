"use client";

import { Card } from "@/components/ui/card";
import { Spacing } from "../_components/utils/Spacing";
import { Section } from "../_components/utils/Section";
import SupportComponent from "../_components/[Association]/SupportComponent";
import { ASSOCIATION, CHARTER } from "../data/data";
import Charter from "../_components/[Association]/Charter";

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
          <h3 className="h3Title">L&apos;association Vues d&apos;ici</h3>
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
          <h3 className="h3Title">Notre charte</h3>
          <p className="charteParagraph">1. SUR L&apos;IMPLICATION DE CHACUN</p>
          <ul className="listStyle">
            <li>
              Chaque membre du groupe reste libre de participer ou de ne pas
              participer à l’élaboration d’un numéro. Il détermine son niveau de
              participation.
            </li>
            <li>
              Il est attendu que les engagements pris par chacun pour chaque
              numéro soient tenus.
            </li>
            <li>
              Les impératifs du journal ne sauraient empiéter sur la liberté de
              chacun. Des solutions en bonne intelligence devront être cherchées
              en cas de difficulté d’un participant à contribuer selon les
              engagements pris.
            </li>
            <li>
              Plusieurs rôles sont nécessaires à la réalisation du journal. A ce
              jour, voici les rôles identifiés : Rédacteur, Photographe,
              Contributeur d’idées, Coordinateur éditorial, Relecteur, Animateur
              du groupe, Contact pub, Maquettiste, Coordinateur de l’impression,
              Distributeur des exemplaires papier, Animateur des réseaux
              sociaux.
            </li>
            <li>
              Chaque participant peut jouer un ou plusieurs rôles. Plusieurs
              participants peuvent se partager un rôle.
            </li>
            <li>
              Nous devrons veiller à ce qu’aucune contrainte extérieure ne porte
              atteinte à ce projet bénévole et donc tourné vers la libre
              participation.
            </li>
          </ul>
          {CHARTER.map((e, index) => (
            <Charter key={index} {...e} />
          ))}
        </Card>
      </Section>
    </>
  );
}