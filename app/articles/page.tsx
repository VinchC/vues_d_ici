"use client";

import { Spacing } from "../_components/utils/Spacing";
import Tab from "../_components/[Journal]/Tab";
import { Section } from "../_components/utils/Section";
import { Card } from "@/components/ui/card";
import Search from "../_components/utils/Search";
import { useState } from "react";
import { ARTICLES, CATEGORIES, JOURNALS } from "@/data/data";
import { ArticleCard } from "../_components/[Articles]/ArticleCard";
import { JournalCard } from "../_components/[Journal]/JournalCard";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Spacing size="sm" />
      <Tab />
      <div>
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
                {JOURNALS.filter(
                  (journal) =>
                    journal.title
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    journal.chapeau
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    journal.content.find((category) =>
                      category.categoryName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    )
                  // ||
                  // journal.content
                  // .map((e, index) => (e.text.find((f) => f.text2.toLowerCase()
                  // .includes(search.toLowerCase()))))
                  // ||
                  // journal.content.find((e) =>
                  //   e.text.map((i, index) =>
                  //     i.text2.toLowerCase().includes(search.toLowerCase())
                  //   )
                  // )
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
}
