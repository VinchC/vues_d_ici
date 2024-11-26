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
  return (
    <>
      <Card className="p-4 gap-2">
        <h2 className="text-2xl mb-4">Titre de l&apos;article</h2>
        <p className="paragraph">Rechercher le contenu d&apos;un article</p>
        <button className="categoryLink">{props.categoryId}</button>
      </Card>
    </>
  );
};
