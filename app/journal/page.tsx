"use client";

import { Card } from "@/components/ui/card";
import { Section } from "../_components/utils/Section";
import { JOURNALS } from "../../data/data";
import { Spacing } from "../_components/utils/Spacing";
import { useState } from "react";
import Search from "../_components/utils/Search";
import { JournalCard } from "../_components/[Journal]/JournalCard";

export default function JournalsPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Spacing size="sm" />
      <Section className="section">
        <Card className="cardBase">
          <h2 className="h2Title">Nos journaux</h2>
          <p className="paragraph">Rechercher le contenu d&apos;un journal</p>
          <Search search={search} handleSearchUpdate={setSearch} />
          <div className="lastArticleGrid">
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
    </>
  );
}
