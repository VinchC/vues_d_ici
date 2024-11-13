"use client";
import { buttonVariants, cn } from "@/components/ui/button";
import "./styles/not-found.css";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <section className="error-container">
        <span>O</span>
        <span>O</span>
        <span>P</span>
        <span>S</span>
      </section>
      <div className="text-center flex flex-col gap-4">
        <p>Une erreur s&apos;est produite.</p>
        <div className="link-container">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "more-link"
            )}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </>
  );
}
