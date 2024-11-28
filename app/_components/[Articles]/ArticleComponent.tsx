/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";

export const ArticleComponent = (props: {
  id: number;
  picture: string;
  alt: string;
  title: string;
  chapeau: string;
  text?: string;
  createdAt: string;
  categoryId: number;
  newspaperId: number;
}) => {
  console.log(props);

  return (
    <>
      <div className="flex flex-col">
        <Card className="p-4 gap-2 w-full rounded-b-none">
          <h2 className="h2Title">{props.title}</h2>
          <p className="categoryLink">{props.categoryId}</p>
          <p className="text-xs italic mt-4">Publié le {props.createdAt}</p>
        </Card>
        <img src={props.picture} alt={props.alt} className="m-0 w-full" />
        <Card className="p-4 gap-2 w-full rounded-t-none">
        <p className="chapeau">{props.chapeau}</p>
        <article className="textArticle mt-4">{props.text}</article>
        </Card>
      </div>
    </>
  );
};
