import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function CarouselCard(props: {
  picture: string;
  alt: string;
  title: string;
  data_twe_carousel_active?: string | undefined;
}) {
  return (
    <div
      className="carouselCard"
      data-twe-carousel-fade
      data-twe-carousel-item
      data-twe-carousel-active={props.data_twe_carousel_active}
      style={{ backfaceVisibility: "hidden" }}
    >
      <Link href="/articles?category=">
        <img
          src={props.picture}
          className="block object-cover max-lg:object-fill max-lg:h-40 max-lg:w-auto"
          alt={props.alt}
        />
        <div className="carouselText">
          <p className="text-lg">{props.title}</p>
        </div>
      </Link>
    </div>
  );
}
