"use client";

import { Header } from "./_components/Header";
import { Spacing } from "./_components/utils/Spacing";
import { Footer } from "./_components/Footer";
import { Slider } from "./_components/Slider";
import SkipLink from "./_components/utils/SkipLink";

export default function Home() {

  return (
    <>
      <SkipLink />

      <Header />

        <main id="maincontent">
          <Spacing size="sm" />
          <Slider />
          <Spacing size="sm" />
          <Footer />
        </main>
    </>
  );
}
