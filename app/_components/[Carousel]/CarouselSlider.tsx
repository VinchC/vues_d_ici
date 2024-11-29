import { CarouselSliderProps } from "@/app/types";

export default function CarouselSlider(props: CarouselSliderProps) {
  return (
    <button
      className={`carouselSlider ${props.className}`}
      type="button"
      data-twe-target="#carouselExampleCrossfade"
      data-twe-slide={props.data_twe_slide}
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
          <path strokeLinecap="round" strokeLinejoin="round" d={props.path_d} />
        </svg>
      </span>
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        {props.title}
      </span>
    </button>
  );
}
