"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

import { Card } from "@/components/ui/card";
import { Section } from "../_components/utils/Section";
import { Spacing } from "../_components/utils/Spacing";
import { FORM_FIELDS } from "../data/data";
import FormComponent from "../_components/[Form]/FormComponent";
import Link from "next/link";

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  console.log(agreed);
  return (
    <>
      <Section className="section justify-center">
        <Card className="p-4 gap-2">
          <h2 className="h2Title">Nous contacter</h2>
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
                  <div className="relative mt-2">
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
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="formField"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <Field className="flex items-center gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                    >
                      <span className="sr-only">
                        Accepter nos conditions d&apos;utiliation
                      </span>
                      <span
                        aria-hidden="true"
                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </div>
                  <Label className="paragraph">
                    En sélectionnant ceci, vous acceptez notre{" "}
                    <Link href="#" className="font-semibold">
                      politique de confidentialité
                    </Link>
                    .
                  </Label>
                </Field>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="categoryLink"
                >
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
