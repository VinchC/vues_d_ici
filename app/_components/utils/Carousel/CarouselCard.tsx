/* eslint-disable @next/next/no-img-element */
export default function CarouselCard(props: {
  picture: string;
  alt: string;
  title: string;
  data_twe_carousel_active?: string | undefined;
}) {
  return (
    <div
      className="carouselCard h-auto w-92"
      data-twe-carousel-fade
      data-twe-carousel-item
      data-twe-carousel-active={props.data_twe_carousel_active}
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src={props.picture}
        className="block object-cover max-lg:h-40 max-lg:w-92"
        alt={props.alt}
      />
      <div className="carouselText">
        <p className="text-lg">{props.title}</p>
      </div>
    </div>
  );
}
