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
                  <label
                    htmlFor="message-subject"
                    className="block font-semibold"
                  >
                    Objet du message
                  </label>
                  <div className="relative mt-2">
                    {/* <div className="absolute inset-y-0 left-0 flex items-center"> */}
                      <select
                        id="message-subject"
                        name="message-subject"
                        className="formField h-10 "
                      >
                        <option value="">--Choisissez un sujet--</option>
                        <option value="join">Adhésion</option>
                        <option value="ad">Encart publicitaire</option>
                        <option value="event">Evènement</option>
                        <option value="other">Autre</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                      />
                    {/* </div> */}
                    {/* <input
                      id="message-subject"
                      name="message-subject"
                      type="text"
                      className=""
                    /> */}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold "
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <Field className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </div>
                  <Label className="text-sm/6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Label>
                </Field>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let&apos;s talk
                </button>
              </div>
            </form>
          </div>
        </Card>
      </Section>
    </>
  );
}
