"use client";

import { useEffect } from "react";
import { FOOTER_LINKS, SOCIAL_MEDIA } from "../../data/data";
import { FooterIcon } from "./FooterIcon";
import { FooterLink } from "./FooterLink";

const Footer = () => {
  useEffect(() => {
  const init = async () => {
    const { Input, Ripple, initTWE } = await import("tw-elements");
    initTWE({ Input, Ripple });
  };
  init();
}, []);

  return (
    <footer className="footer">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-8">
          {SOCIAL_MEDIA.map((media, index) => (
            <FooterIcon key={index} {...media} />
          ))}
        </div>

        <div>
          <form action="">
            <div className="grid-cols-1 grid items-center justify-items-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ms-auto">
                <p className="paragraph">Inscrivez-vous à notre newsletter !</p>
              </div>

              <div className="relative md:mb-6" data-twe-input-wrapper-init>
                <input
                  type="email"
                  className="peer block h-8 rounded border-0 bg-background text-black text-xs w-60 p-2"
                  id="exampleFormControlInputEmail"
                  placeholder="Adresse mail"
                />
                <label
                  htmlFor="exampleFormControlInputEmail"
                  className="pointer-events-none absolute left-3 text-xs top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-foreground transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                ></label>
              </div>

              <div className="mb-6 md:me-auto">
                <button
                  type="submit"
                  className="largeButton"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-6">
          <p className="paragraph">
            Un journal conçu par et pour les habitants des quartiers Jourdain,
            Belleville, Buttes-Chaumont, Place des Fêtes des XIXè et XXè
            arrondissements de Paris.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {FOOTER_LINKS.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
      </div>

      <div className="w-full p-4 text-center">
        © 2025 Copyright Vues d&apos;ici
      </div>
    </footer>
  );
};

export default Footer;
