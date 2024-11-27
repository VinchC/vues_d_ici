import { CharterProps } from "@/app/types";
import { AccordionIcon } from "../icons/AccordionIcon";

export default function Charter(props: CharterProps) {
  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Down icon
    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    // SVG for Up icon
    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    // Toggle the content's max-height for smooth opening and closing
    if (content && icon) {
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0";
        icon.innerHTML = upSVG;
      } else {
        content.style.maxHeight = content?.scrollHeight + "px";
        icon.innerHTML = downSVG;
      }
    }
  }
  return (
    <>
      <button
        onClick={() => toggleAccordion(props.id)}
        className="w-full flex justify-between items-center py-5 text-slate-800"
      >
        <p className="charteParagraph">{props.title}</p>
        <span
          id={`icon-${props.id}`}
          className="text-slate-800 transition-transform duration-300"
        >
          <AccordionIcon />
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
