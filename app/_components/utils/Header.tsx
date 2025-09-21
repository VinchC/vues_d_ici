/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "../utils/Section";
import ThemeSwitch from "../utils/ThemeSwitch";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAVBAR_LINKS } from "@/data/data";
import { NavLink } from "../utils/NavLink";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Section className="max-lg:max-w-4xl max-sm:max-w-2xl">
        <nav className="flex mt-4 md:h-16">
          <Link href="/">
            <p className="logo">Vues d&apos;ici - Journal de quartier</p>
          </Link>
          <div className="flex-1" />

          <div className="flex-col">
            <div className="md:hidden flex justify-end items-center">
              <button
                onClick={() => {
                  isOpen ? setIsOpen(false) : setIsOpen(true);
                }}
                type="button"
                className="text-background"
                aria-label="ouvre le menu déroulant de la barre de navigation pour les écrans dont la largeur est inférieure à 768 pixels"
              >
                <Menu />
              </button>
            </div>
            <div
              className={
                !isOpen
                  ? "max-md:invisible"
                  : "w-[100px] bg-fifth rounded-xl p-2 mr-0"
              }
            >
              <ul
                className={`flex items-center gap-2 max-md:flex-col ${
                  !isOpen ? "max-md:invisible" : "max-md:visible"
                }`}
              >
                {NAVBAR_LINKS.map((link, index) => (
                  <NavLink key={index} {...link} />
                ))}
                <button
                  aria-label="bascule le mode jour / nuit (prend par défaut le mode préfére par l'utilisateur"
                  className="navLinkSmall max-md:navLinkLarge"
                >
                  <ThemeSwitch />
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </Section>
    </header>
  );
};
