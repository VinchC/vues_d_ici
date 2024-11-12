import Link from "next/link";
import "./styles/not-found.css";

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
      <div className="link-container">
        <Link href="/" className="more-link">
          Back to homepage
        </Link>
      </div>
    </>
  );
}
