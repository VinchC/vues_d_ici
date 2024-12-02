"use client";

import { Card } from "@/components/ui/card";
import { Section } from "../_components/utils/Section";
import { ARTICLES, CATEGORIES } from "../../data/data";
import { ArticleCard } from "../_components/[Articles]/ArticleCard";
import { Spacing } from "../_components/utils/Spacing";
import { useState } from "react";
import Search from "../_components/utils/Search";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Spacing size="sm" />
      <Section className="section">
        <Card className="cardBase">
          <h2>Nos articles et journaux</h2>
          <p className="paragraph">Rechercher le contenu d&apos;un article</p>
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
                article.title.toLowerCase().includes(search.toLowerCase()) ||
                article.text?.toLowerCase().includes(search.toLowerCase()) ||
                article.chapeau?.toLowerCase().includes(search.toLowerCase())
            )
              .sort((a, b) => b.id - a.id)
              .map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
          </div>
        </Card>
      </Section>
    </>
  );
}
