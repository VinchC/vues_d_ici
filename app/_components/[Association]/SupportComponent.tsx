import { AssociationProps } from "@/app/types";
import Membership from "./Membership";
import Link from "next/link";

export default function SupportComponent(props: AssociationProps) {
  return (
    <div className="flex flex-col justify-around p-4 spacing bg-tertiary rounded-xl border-2 border-background h-64 max-sm:h-48">
      <h2 className="h2Title text-black">{props.title}</h2>
      <p className="paragraph text-black">{props.text}</p>
      {props.textButton == "Faire un don" ? (
        <Link
          target="_blank"
          href="https://www.helloasso.com/associations/quartier-vu-d-ici-19-20/collectes/prochain-numero-de-vues-d-ici-nous-avons-besoin-de-vous"
          className="categoryLink"
        >
          {props.textButton}
        </Link>
      ) : (
        <Membership />
      )}
    </div>
  );
}
