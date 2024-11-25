export default function CarouselButton(props: {
  data_twe_slide_to: string;
  aria_label: string;
  data_twe_carousel_active?: string | undefined;
}) {
  return (
    <button
      type="button"
      data-twe-target="#carouselExampleCrossfade"
      data-twe-slide-to={props.data_twe_slide_to}
      data-twe-carousel-active={props.data_twe_carousel_active}
      className="carouselButton ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
      aria-current="true"
      aria-label={props.aria_label}
    ></button>
  );
}