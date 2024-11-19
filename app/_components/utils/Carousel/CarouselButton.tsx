export default function CarouselButton(props: {
  data_twe_slide_to: string;
  aria_label: string;
  data_twe_carousel_active?: string | undefined;
}) {
  return (
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to={props.data_twe_slide_to}
      data-twe-carousel-active={props.data_twe_carousel_active}
      className="carouselButton"
      aria-current="true"
      aria-label={props.aria_label}
    ></button>
  );
}
