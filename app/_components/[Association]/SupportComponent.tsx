import { AssociationProps } from "@/app/types";
import Membership from "./Membership";
import Link from "next/link";

export default function SupportComponent(props: AssociationProps) {
  return (
    <div className="flex flex-col justify-around p-4 bg-fifth rounded-md shadow-xl h-60 max-sm:h-56">
      <h3 className="text-black">{props.title}</h3>
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
