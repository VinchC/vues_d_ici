/* eslint-disable @next/next/no-img-element */
import { JournalProps } from "@/app/types";
import { Card } from "@/components/ui/card";

export const JournalComponent = (props: JournalProps) => {
  return (
    <>
      <section className="flex flex-col gap-0">
        <Card className="p-4 gap-2 w-full rounded-b-none m-0">
          <h2 className="h2Title">
            #{props.id} - N° de {props.title}
          </h2>
          <p className="paragraph">{props.chapeau}</p>
        </Card>
        <ul>
          {props.content.map((e, index) => (
            <>
              <li key={index}>{e.categoryName}</li>
              <ul className="listStyle">
                {e.text.map((f, index) => (
                  <li className="chartText" key={index}>
                    {f}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </ul>
      </section>
    </>
  );
};
