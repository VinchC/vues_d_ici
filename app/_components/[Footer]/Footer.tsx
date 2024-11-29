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
      <section className="container mt-4">
        <div className="mb-6 flex justify-center space-x-8">
          {SOCIAL_MEDIA.map((media, index) => (
            <FooterIcon key={index} {...media} />
          ))}
        </div>

        <div>
          <p className="paragraph">
            Un journal conçu par et pour les habitants des quartiers Jourdain,
            Belleville, Buttes-Chaumont, Place des Fêtes des XIXè et XXè
            arrondissements de Paris.
          </p>
        </div>

        <div className="footerAndCategories">
          {FOOTER_LINKS.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
      </section>

      <div className="w-full">
        <p className="paragraph">© 2025 Copyright Vues d&apos;ici</p>
      </div>
    </footer>
  );
};

export default Footer;
