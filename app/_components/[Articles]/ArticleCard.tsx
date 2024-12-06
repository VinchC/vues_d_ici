/* eslint-disable @next/next/no-img-element */

import { ArticleProps } from "@/app/types";
import Link from "next/link";

export const ArticleCard = (props: ArticleProps) => {
  return (
    <div className="articleCard">
      <img
        src={props.picture}
        alt={props.alt}
        className="flex items-center max-w-80 max-h-160 rounded-t-lg"
      />
      <div className="px-4">
        <h3 className="text-base font-semibold">{props.title}</h3>
        <p className="text-sm spacing line-clamp-3">{props.chapeau}</p>
        <Link href={`/articles/${props.id}`} className="mediumButton">
          Lire l&apos;article
        </Link>
      </div>
    </div>
  );
};
