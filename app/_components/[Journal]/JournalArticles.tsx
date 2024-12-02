import { Card } from "@/components/ui/card";
import { Section } from "../utils/Section";
import Link from "next/link";
import { ArticleCard } from "../[Articles]/ArticleCard";
import { JournalProps } from "@/app/types";
import { ARTICLES } from "@/data/data";

export const JournalArticles = (props: JournalProps) => {
  const articlesJournal = ARTICLES.filter(
    (article: { newspaperId: number }) => article.newspaperId === props.id
  );
  return (
    <>
      <section className="flex flex-col gap-0">
        <Card className="p-4 gap-2">
          <h2 className="h2Title">Nos derniers articles</h2>
          <div className="lastArticleGrid">
            {articlesJournal
              .sort((a, b) => b.id - a.id)
              .slice(0, 6)
              .map((articleJournal, index) => (
                <ArticleCard key={index} {...articleJournal} />
              ))}
          </div>
          <div className="flex justify-center items-center">
            <Link href="/articles" className="largeButton">
              Voir tous les articles
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
};
