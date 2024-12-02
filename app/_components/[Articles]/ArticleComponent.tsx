/* eslint-disable @next/next/no-img-element */
import { ArticleProps } from "@/app/types";
import { Card } from "@/components/ui/card";

export const ArticleComponent = (props: ArticleProps) => {
  return (
    <>
      <section className="flex flex-col gap-0">
        <Card className="p-4 gap-2 w-full rounded-b-none m-0">
          <h2>{props.title}</h2>
          <button className="categoryLink spacingMedium">
            {props.categoryId}
          </button>
          <p className="text-xs italic spacing">Publié le {props.createdAt}</p>
        </Card>
        <img src={props.picture} alt={props.alt} className="m-0 w-full" />
        <Card className="p-4 gap-2 w-full rounded-t-none m-0">
          <p className="chapeau">{props.chapeau}</p>
          <article className="textArticle">{props.text}</article>
        </Card>
      </section>
    </>
  );
};
