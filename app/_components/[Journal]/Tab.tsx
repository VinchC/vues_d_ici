"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { Section } from "../utils/Section";
import { Card } from "@/components/ui/card";
import Search from "../utils/Search";
import { ARTICLES, CATEGORIES, JOURNALS } from "@/data/data";
import { ArticleCard } from "../[Articles]/ArticleCard";
import { JournalCard } from "./JournalCard";

const Tab = () => {
  useEffect(() => {
    const init = async () => {
      const { Tab, initTWE } = await import("tw-elements");
      initTWE({ Tab });
    };
    init();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <>
      <Section className="section">
        <ul
          className="flex list-none flex-row flex-wrap gap-24 border-b-0 ps-0 spacing"
          role="tablist"
          data-twe-nav-ref
        >
          <li role="presentation">
            <a
              href="#articles"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill"
              data-twe-target="#nos-articles"
              data-twe-nav-active
              role="tab"
              aria-controls="nos-articles"
              aria-selected="true"
            >
              ARTICLES
            </a>
          </li>
          <li role="presentation">
            <a
              href="#nos-journaux"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill"
              data-twe-target="#nos-journaux"
              role="tab"
              aria-controls="nos-journaux"
              aria-selected="false"
            >
              JOURNAUX
            </a>
          </li>
        </ul>
      </Section>
      <div className="mb-6">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="nos-articles"
          role="tabpanel"
          aria-labelledby="nos-articles"
          data-twe-tab-active
        >
          <Section className="section">
            <Card className="cardBase">
              <div className="flex justify-between items-center">
                <h2>Nos articles</h2>
              </div>

              <p className="paragraph">
                Rechercher le contenu d&apos;un article
              </p>
              <Search search={search} handleSearchUpdate={setSearch} />
              <p className="paragraph">Filtrer par catégorie</p>
              <div className="footerAndCategories">
                {CATEGORIES.map((category, index) => (
                  <button key={index} className="categoryLink">
                    {category.title}
                  </button>
                ))}
              </div>
              <div className="articlesGrid">
                {ARTICLES.filter(
                  (article) =>
                    article.title
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    article.text
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    article.chapeau
                      ?.toLowerCase()
                      .includes(search.toLowerCase())
                )
                  .sort((a, b) => b.id - a.id)
                  .map((article, index) => (
                    <ArticleCard key={index} {...article} />
                  ))}
              </div>
            </Card>
          </Section>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="nos-journaux"
          role="tabpanel"
          aria-labelledby="nos-journaux"
        >
          <Section className="section">
            <Card className="cardBase">
              <div className="flex justify-between items-center">
                <h2>Les journaux</h2>
              </div>
              <p className="paragraph">
                Rechercher le contenu d&apos;un journal
              </p>
              <Search search={search} handleSearchUpdate={setSearch} />
              <div className="articlesGrid">
                {JOURNALS.filter((journal) =>
                  journal.title.toLowerCase().includes(search.toLowerCase())
                )
                  .sort((a, b) => b.id - a.id)
                  .map((journal, index) => (
                    <JournalCard key={index} {...journal} />
                  ))}
              </div>
            </Card>
          </Section>
        </div>
      </div>
    </>
  );
};

export default Tab;
