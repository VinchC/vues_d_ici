/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const ArticleCard = (props: {
  picture: string;
  alt: string;
  title: string;
  chapeau: string;
  href: string;
}) => {
  return (
    <div className="articleCard w-80 h-160">
      <img src={props.picture} alt={props.alt} className="flex items-center max-w-80 max-h-160 rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-base font-semibold">{props.title}</h3>
        <p className="text-sm mt-2 line-clamp-3">{props.chapeau}</p>
        <Link href="/article/:id" className="mediumButton mt-4">
          Lire l&apos;article
        </Link>
      </div>
    </div>
  );
};
