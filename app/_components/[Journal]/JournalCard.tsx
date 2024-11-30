import { Card } from "@/components/ui/card";
import { Section } from "../utils/Section";
import { JournalProps } from "@/app/types";
import Download from "./Download";

export const JournalCard = (props: JournalProps) => {
  return (
    <>
      <Section className="section">
        <Card className="cardBase">
          <h2 className="h2Title">
            Vues d&apos;ici n°{props.id} - {props.title}
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus veritatis ab eum dolorem at cum architecto ipsum
            labore culpa exercitationem. Rem, ratione doloribus! Odio iusto
            aperiam autem ab, esse illum!
          </p>
          <Download id={props.id}/>
        </Card>
      </Section>
    </>
  );
};
