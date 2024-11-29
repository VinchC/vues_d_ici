import { CharterProps } from "@/app/types";
import UpAccordionIcon from "../icons/UpAccordionIcon";
import DownAccordionIcon from "../icons/DownAccordionIcon";
import { useState } from "react";

export default function Charter(props: CharterProps) {
  const [open, setOpen] = useState(false);

  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);

    if (content) {
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0";
        setOpen(false);
      } else {
        content.style.maxHeight = content?.scrollHeight + "px";
        setOpen(true);
      }
    }
  }
  return (
    <>
      <button
        onClick={() => {
          toggleAccordion(props.id), setOpen;
        }}
        className="w-full flex justify-between py-5"
      >
        <p className="charteParagraph">{props.title}</p>
        <span
          id={`icon-${props.id}`}
          className="transition-transform duration-300"
        >
          {open ? <UpAccordionIcon /> : <DownAccordionIcon />}
        </span>
      </button>
      <div
        id={`content-${props.id}`}
        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <ul className="listStyle">
          {props.text.map((e, index) => (
            <li className="chartText" key={index}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
