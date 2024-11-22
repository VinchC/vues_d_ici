import { Card } from "@/components/ui/card";
import { Section } from "../utils/Section";
import { ARTICLES_HOMEPAGE } from "../../data/data";
import { ArticleCard } from "./ArticleCard";
import Link from "next/link";

export const LastArticles = () => {
  return (
    <>
      <Section className="section justify-center">
        <Card className="p-4 gap-2">
          <h2 className="text-lg mb-4">Nos derniers articles</h2>
          <div className="lastArticleGrid">
            {ARTICLES_HOMEPAGE.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <Link href="/articles" className="largeButton">
              Voir tous les articles
            </Link>
          </div>
        </Card>
      </Section>
    </>
  );
};
