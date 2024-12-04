"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { Section } from "../utils/Section";
import { DISPLAY_CONTENT } from "@/data/data";

const Tab = () => {
  useEffect(() => {
    const init = async () => {
      const { Tab, initTWE } = await import("tw-elements");
      initTWE({ Tab });
    };
    init();
  }, []);

  return (
    <>
      <Section className="section">
        <ul
          className="flex list-none flex-row gap-24 max-sm:gap-4 border-b-0 ps-0 spacing"
          role="tablist"
          data-twe-nav-ref
        >
          {DISPLAY_CONTENT.map((e, index) => (
            <li key={index} role="presentation">
              <a
                href={`#${e.link}`}
                className="my-2 rounded-xl block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-700/10 focus:isolate focus:border-transparent data-[twe-nav-active]:border-foreground data-[twe-nav-active]:text-foreground dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary dark:data-[twe-nav-active]:border-primary"
                data-twe-toggle="pill"
                data-twe-target={`#${e.link}`}
                data-twe-nav-active={e.dataTweNavActive}
                role="tab"
                aria-controls={e.link}
                aria-selected={e.ariaSelected}
              >
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Tab;
