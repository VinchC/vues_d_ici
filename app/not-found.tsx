import Link from "next/link";
import "./styles/not-found.css";
import BackToHomeLink from "./_components/utils/BackToHomeLink";

export default function Custom404() {
  return (
    <>
      <section className="notfound-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <BackToHomeLink />
    </>
  );
}
