import { Card } from "@/components/ui/card";
import { Section } from "../_components/utils/Section";
import { Spacing } from "../_components/utils/Spacing";

export default function ContactPage() {
  return (
    <>
      <Spacing size="sm" />
      <Section className="section justify-center">
        <Card className="p-4 gap-2">
          <h2 className="h2Title">Nous contacter</h2>
          <p className="paragraph">
            Vous avez une question, voulez adhérer au journal ou nous partager
            un évenement, une info?
          </p>
          <p className="paragraph">
            Envoyez nous un mail à journaldequartier1920@gmail.com ou remplissez
            le formulaire ci-dessous et nous reviendrons vers vous au plus vite!
          </p>
        </Card>
      </Section>
    </>
  );
}
