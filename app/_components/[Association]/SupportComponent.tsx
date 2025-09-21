import { AssociationProps } from "@/app/types";
import Membership from "./Membership";
import Link from "next/link";

export default function SupportComponent(props: AssociationProps) {
  return (
    <div className="flex flex-col justify-around p-2 rounded-md shadow-xl h-60 max-sm:h-56">
      <h3 className="">{props.title}</h3>
      <p className="paragraph ">{props.text}</p>
      {props.textButton == "Faire un don" ? (
        <Link
          target="_blank"
          href="https://www.helloasso.com/associations/quartier-vu-d-ici-19-20/collectes/prochain-numero-de-vues-d-ici-nous-avons-besoin-de-vous"
          className="categoryLink bg-gray-300"
        >
          {props.textButton}
        </Link>
      ) : (
        <Membership />
      )}
    </div>
  );
}
