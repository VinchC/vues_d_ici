import { AssociationProps } from "@/app/types";

export default function SupportComponent(props: AssociationProps) {
  return (
    <div className="p-4 mt-4 bg-tertiary rounded-xl">
      <h2 className="h2Title">{props.title}</h2>
      <p className="paragraph">{props.text}</p>
      <button className="categoryLink mt-4">{props.textButton}</button>
    </div>
  );
}
