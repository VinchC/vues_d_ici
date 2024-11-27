import Link from "next/link";

export const NavLink = (props: { href: string; title: string }) => {
  return (
    <Link href={props.href} className="navLinkLarge">
      {props.title}
    </Link>
  );
};
