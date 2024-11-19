"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { CAROUSEL_BUTTONS, CAROUSEL_PICTURES } from "@/app/data/data";
import { useEffect } from "react";
import Link from "next/link";
import CarouselButton from "./CarouselButton";

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
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="carouselButton duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="1"
          className="carouselButton duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="2"
          className="carouselButton duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="relative w-full overflow-hidden max-h-44 max-w-auto">
        <div
          className="relative -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={CAROUSEL_PICTURES[0].picture}
            className="block object-fill max-h-44 max-w-92"
            alt={CAROUSEL_PICTURES[0].alt}
          />
          <div className="carouselText">
            <p className="text-lg">{CAROUSEL_PICTURES[0].title}</p>
          </div>
        </div>
        <div
          className="relative -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={CAROUSEL_PICTURES[1].picture}
            className="block object-fill max-h-44 max-w-92"
            alt={CAROUSEL_PICTURES[1].alt}
          />
          <div className="carouselText">
            <p className="text-lg">{CAROUSEL_PICTURES[1].title}</p>
          </div>
        </div>
        <div
          className="relative -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={CAROUSEL_PICTURES[2].picture}
            className="block object-fill max-h-44 max-w-92"
            alt={CAROUSEL_PICTURES[2].alt}
          />
          <div className="carouselText">
            <p className="text-lg text-black">{CAROUSEL_PICTURES[2].title}</p>
          </div>
        </div>
      </div>
      {CAROUSEL_BUTTONS.map((button, index) => (
        <CarouselButton key={index} {...button} />
      ))}
    </div>
  );
};

export default Carousel;
