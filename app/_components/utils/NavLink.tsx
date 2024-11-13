import Link from "next/link";

export const NavLink = (props: { href: string; title: string }) => {
  return (
    <Link href={props.href} className="buttonLarge">
      {props.title}
    </Link>
  );
};
