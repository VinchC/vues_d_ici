/* eslint-disable @next/next/no-img-element */

export default function CarouselCard(props: {
  picture: string;
  alt: string;
  title: string;
}) {
  return (
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-active
      data-twe-carousel-item
      style={{ backfaceVisibility: "hidden" }}
    >
      <img src={props.picture} className="block w-full" alt={props.alt} />
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <p className="text-lg">{props.title}</p>
      </div>
    </div>
  );
}
