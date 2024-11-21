"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import {
  CAROUSEL_BUTTONS,
  CAROUSEL_CATEGORIES,
  CAROUSEL_SLIDERS,
} from "@/app/data/data";
import { useEffect } from "react";
import CarouselButton from "./CarouselButton";
import CarouselSlider from "./CarouselSlider";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleCrossfade"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div
        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        {CAROUSEL_BUTTONS.map((button, index) => (
          <CarouselButton key={index} {...button} />
        ))}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] h-40 w-92">
        {CAROUSEL_CATEGORIES.map((category, index) => (
          <CarouselCard key={index} {...category} />
        ))}
      </div>
      {CAROUSEL_SLIDERS.map((slider, index) => (
        <CarouselSlider key={index} {...slider} />
      ))}
    </div>
  );
};

export default Carousel;
