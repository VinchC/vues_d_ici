import { buttonVariants, cn } from "@/components/ui/button";
import Link from "next/link";

export default function BackToHomeLink() {
  return (
    <div className="link-container">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "outline" }), "more-link")}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
