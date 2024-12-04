import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArticleCard } from "../[Articles]/ArticleCard";
import { JournalProps } from "@/app/types";
import { ARTICLES } from "@/data/data";

export const JournalArticles = (props: JournalProps) => {
  const articlesJournal = ARTICLES.filter(
    (article: { newspaperId: number }) => article.newspaperId === props.id
  );

  const minIndex = 1;
  const maxIndex = 6;

  return (
    <>
      <section className="flex flex-col gap-0">
        <Card className="p-4 gap-2">
          <h2>Dans cette édition</h2>
          <div className="articlesGrid">
            {articlesJournal
              .sort((a, b) => b.id - a.id)
              .map((articleJournal, index) => (
                <ArticleCard key={index} {...articleJournal} />
              ))}
          </div>
          <div className="flex justify-between">
            {props.id - 1 >= minIndex ? (
              <Link href={`/journals/${props.id - 1}`} className="largeButton">
                Edition précédente
              </Link>
            ) : (
              <div></div>
            )}
            {props.id + 1 <= maxIndex ? (
              <Link href={`/journals/${props.id + 1}`} className="largeButton">
                Edition suivante
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </Card>
      </section>
    </>
  );
};
