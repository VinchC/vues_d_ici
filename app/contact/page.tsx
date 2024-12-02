import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Card } from "@/components/ui/card";
import { Section } from "../_components/utils/Section";
import { FORM_FIELDS } from "../../data/data";
import FormComponent from "../_components/[Form]/FormComponent";
import Link from "next/link";
import PolicyAcceptance from "../_components/utils/PolicyAcceptance";
import { Spacing } from "../_components/utils/Spacing";

export default function ContactPage() {
  return (
    <>
      <Spacing size="sm" />
      <Section className="section">
        <Card className="cardBase">
          <h2>Nous contacter</h2>
          <p className="paragraph">
            Vous avez une question, voulez adhérer au journal ou nous partager
            un évenement, une info?
          </p>
          <p className="paragraph">
            Envoyez nous un mail à{" "}
            <strong>
              <Link href="mailto:journaldequartier1920@gmail.com">
                journaldequartier1920@gmail.com
              </Link>
            </strong>{" "}
            ou remplissez le formulaire ci-dessous et nous reviendrons vers vous
            au plus vite!
          </p>
          <div className="isolate py-12">
            <form action="#" method="POST" className="mx-auto max-w-2xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FORM_FIELDS.map((e, index) => (
                  <FormComponent key={index} {...e} />
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="message-subject" className="inputLabel">
                    Objet du message
                  </label>
                  <div className="relative">
                    <label htmlFor="country" className="sr-only">
                      Sujet
                    </label>
                    <select
                      id="message-subject"
                      name="message-subject"
                      className="formField h-10"
                      required
                    >
                      <option value="">--Choisissez un sujet--</option>
                      <option value="join">Adhésion</option>
                      <option value="ad">Encart publicitaire</option>
                      <option value="event">Evènement</option>
                      <option value="other">Autre</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none absolute right-2 top-0 h-full w-5"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="inputLabel">
                    Message
                  </label>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="formField"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <PolicyAcceptance />
              </div>
              <div className="mt-8 flex justify-center">
                <button type="submit" className="categoryLink">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </Card>
      </Section>
    </>
  );
}
