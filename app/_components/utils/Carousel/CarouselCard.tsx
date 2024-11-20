/* eslint-disable @next/next/no-img-element */
export default function CarouselCard(props: {
  picture: string;
  alt: string;
  title: string;
  data_twe_carousel_active?: string | undefined;
}) {
  return (
    <div
      className="carouselElement"
      data-twe-carousel-item
      data-twe-carousel-active={props.data_twe_carousel_active}
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src={props.picture}
        className="block object-cover"
        alt={props.alt}
      />
      <div className="carouselText">
        <p className="text-lg">{props.title}</p>
      </div>
    </div>
  );
}
