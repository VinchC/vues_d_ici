/* eslint-disable @next/next/no-img-element */
import { JournalProps } from "@/app/types";
import Download from "./Download";
import Link from "next/link";

export const JournalCard = (props: JournalProps) => {
  return (
    <div className="articleCard">
      <img
        src={props.picture}
        alt={props.alt}
        className="flex items-center max-w-80 max-h-180 rounded-t-lg"
      />
      <div className="px-4">
        <h3 className="text-base font-semibold">{props.title}</h3>
        <p className="text-sm spacing line-clamp-3">{props.chapeau}</p>
        <Link href={`/journals/${props.id}`} className="mediumButton">
          Lire le journal
        </Link>
        <Download id={props.id} />
      </div>
    </div>
  );
};
