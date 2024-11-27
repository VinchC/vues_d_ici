import { CharterProps } from "@/app/types";

export default function Charter(props: CharterProps) {
  return (
    <>
      <p className="charteParagraph">{props.title}</p>
      <ul className="listStyle">
        <li>{props.text}</li>
      </ul>
    </>
  );
}
