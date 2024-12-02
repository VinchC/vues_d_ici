import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Section } from "../utils/Section";
import {
  MAIN_DISTRIBUTION_PLACES,
  SECONDARY_DISTRIBUTION_PLACES,
} from "@/data/data";

export const WhereToFind = () => {
  return (
    <>
      <div id="nous-trouver">
        <Section className="section">
          <Card className="cardBase">
            <h2>Où trouver le journal ?</h2>
            <p className="paragraph">
              A chaque parution, vous pouvez vous servir gratuitement dans un
              des lieux répartis sur le quartier. Les points de collecte
              principaux sont approvisionnés prioritairement.
            </p>
            <div className="flex max-sm:flex-col-reverse max-sm:flex-col items-center max-sm:items-start mb-8">
              <div className="flex-[2] flex flex-col gap-2">
                <h3 className="h3Title">Points de collecte principaux</h3>
                {MAIN_DISTRIBUTION_PLACES.map((place, index) => (
                  <Link key={index} href="/">
                    <p className="font-bold">{place.business_name}</p>
                    <p className="text">
                      {place.address}, {place.city} {place.district}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="flex-[3] flex justify-around items-center max-md:m-auto ml-auto">
                <div className="max-lg:w-64 max-lg:h-64 w-96 h-96 bg-red-500 mt-4"></div>
              </div>
            </div>
            <h3 className="h3Title">Points de collecte secondaires</h3>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
              {SECONDARY_DISTRIBUTION_PLACES.map((place, index) => (
                <Link key={index} href="/">
                  <p className="text">{place.business_name}</p>
                </Link>
              ))}
            </div>
            <p className="paragraph">
              <strong>
                Et plein d’autres commerces, cafés et équipements !
              </strong>
            </p>
          </Card>
        </Section>
      </div>
    </>
  );
};
