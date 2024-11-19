"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { CAROUSEL_PICTURES } from "@/app/data/data";
import { useEffect } from "react";
import Link from "next/link";
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

      {/* <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {CAROUSEL_PICTURES.map((skill, index) => (
          <CarouselCard key={index} {...skill} />
        ))}
      </div> */}

      <div className="relative w-full overflow-hidden object-contain max-h-44 max-w-auto">
        <div
          className="relative -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={CAROUSEL_PICTURES[0].picture}
            className="block w-full max-lg:max-h-44 max-lg:max-w-auto"
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
            className="block w-full max-lg:max-h-44 max-lg:max-w-auto"
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
            className="block w-full max-lg:max-h-44 max-lg:max-w-auto"
            alt={CAROUSEL_PICTURES[2].alt}
          />
          <div className="carouselText">
            <p className="text-lg text-black">{CAROUSEL_PICTURES[2].title}</p>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;