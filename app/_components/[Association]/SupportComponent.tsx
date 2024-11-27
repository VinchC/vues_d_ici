import { AssociationProps } from "@/app/types";
import Membership from "./Membership";

export default function SupportComponent(props: AssociationProps) {
  return (
    <div className="flex flex-col justify-around p-4 mt-4 bg-tertiary rounded-xl border-2 border-background h-72 max-sm:h-56">
      <h2 className="h2Title text-black">{props.title}</h2>
      <p className="paragraph text-black">{props.text}</p>
      {props.textButton == "Faire un don" ? (
        <button className="categoryLink mt-4">{props.textButton}</button>
      ) : (
        <Membership />
      )}
    </div>
  );
}
