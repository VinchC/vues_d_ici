import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-5xl max-lg:max-w-2xl max-sm:max-w-sm px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
