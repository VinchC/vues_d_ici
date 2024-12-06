"use client";
import { buttonVariants, cn } from "@/components/ui/button";
import "./styles/not-found.css";
import Link from "next/link";
import BackToHomeLink from "./_components/utils/BackToHomeLink";

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
        <p className="paragraph">Une erreur s&apos;est produite.</p>
        <BackToHomeLink />
      </div>
    </>
  );
}
