import { Card } from "@/components/ui/card";
import { Section } from "../_components/utils/Section";
import { ARTICLES, CATEGORIES } from "../data/data";
import { ArticleCard } from "../_components/[Articles]/ArticleCard";
import { Spacing } from "../_components/utils/Spacing";
import Link from "next/link";

export default function ArticlePage() {
  return (
    <>
      <Spacing size="sm" />
      <Section className="section justify-center mt-8 max-lg:mt-20">
        <Card className="p-4 gap-2">
          <h2 className="text-2xl mb-4">Nos articles et journaux</h2>
          <p className="paragraph">Filtrer par catégorie</p>
          <div className="footerAndCategories">
            {CATEGORIES.map((category, index) => (
              <Link
                key={index}
                href={`/articles?category=${category.title}`}
                className="categoryLink"
              >
                {category.title}
              </Link>
            ))}
          </div>
          <div className="lastArticleGrid">
            {ARTICLES.sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            ).map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </Card>
      </Section>
    </>
  );
}
