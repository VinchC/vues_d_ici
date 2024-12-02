import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Section } from "../utils/Section";
import { JOURNALS } from "@/data/data";

export const JournalSummary = () => {
  return (
    <>
      <Section className="section">
        <Card className="cardBase">
          <h2 className="h2Title">Au sommaire de cette édition :</h2>
          <div className="flex max-sm:flex-col-reverse max-sm:flex-col items-center max-sm:items-start mb-8">
            <div className="flex-[2] flex flex-col gap-2">
              <h3 className="h3Title">Points de collecte principaux</h3>
              {JOURNALS.map((e, index) => (
                <Link key={index} href="/">
                  <p className="font-bold">{e.content.categoryName}</p>
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
        </Card>
      </Section>
    </>
  );
};
