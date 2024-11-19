/* eslint-disable @next/next/no-img-element */
export default function CarouselCard(props: {
  picture: string;
  alt: string;
  title: string;
  data_twe_carousel_active?: string | undefined;
}) {
  return (
    <div
      className="relative -mr-[100%] hidden w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      data-twe-carousel-active={props.data_twe_carousel_active}
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src={props.picture}
        className="block object-fill max-h-44 max-w-92"
        alt={props.alt}
      />
      <div className="carouselText">
        <p className="text-lg">{props.title}</p>
      </div>
    </div>
  );
}
