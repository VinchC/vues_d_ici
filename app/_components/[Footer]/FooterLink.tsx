import Link from "next/link";

export const FooterLink = (props: { href: string; title: string }) => {
  return (
    <Link href={props.href} className="footerLink">
      {props.title}
    </Link>
  );
};
