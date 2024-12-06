import { NavLinkProps } from "@/app/types";
import Link from "next/link";

export const FooterLink = (props: NavLinkProps) => {
  return (
    <Link href={props.href} className="footerLink">
      {props.title}
    </Link>
  );
};
