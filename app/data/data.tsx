import {
  CarouselButtonProps,
  CarouselSliderProps,
  CategoryProps,
  NavLinkProps,
} from "../types";

import distribution from "@/public/images/distribution_jeunes_ambitieux.jpg";
import playground from "@/public/images/inauguration_playground_2.jpg";
import station from "@/public/images/station_serge_gainsbourg.jpg";

export const NAVBAR_LINKS: NavLinkProps[] = [
  {
    href: "/articles",
    title: "Articles",
  },
  {
    href: "/nous-trouver",
    title: "Nous trouver",
  },
  {
    href: "/contact",
    title: "Nous contacter",
  },
  {
    href: "/association",
    title: "L'association",
  },
];

export const CAROUSEL_PICTURES: CategoryProps[] = [
  {
    picture: distribution.src,
    alt: "Photo représentant une distribution",
    title: "Distribution jeunes ambitieux",
    data_twe_carousel_active: "data-twe-carousel-active",
  },
  {
    picture: playground.src,
    alt: "L'inauguration du terrain de jeux de la Place des Fêtes.",
    title: "Inauguration playground",
  },
  {
    picture: station.src,
    alt: "Photo représentant la station de métro Serge Gainsbourg.",
    title: "Station Serge Gainsbourg",
  },
];

export const CAROUSEL_SLIDERS: CarouselSliderProps[] = [
  {
    data_twe_slide: "prev",
    path_d: "M15.75 19.5L8.25 12l7.5-7.5",
    title: "Previous",
    className: "left-0",
  },
  {
    data_twe_slide: "next",
    path_d: "M8.25 4.5l7.5 7.5-7.5 7.5",
    title: "Next",
    className: "right-0",
  },
];

export const CAROUSEL_BUTTONS: CarouselButtonProps[] = [
  {
    data_twe_slide_to: "0",
    aria_label: "Slide 1",
    data_twe_carousel_active: "data-twe-carousel-active",
  },
  {
    data_twe_slide_to: "1",
    aria_label: "Slide 2",
  },
  {
    data_twe_slide_to: "2",
    aria_label: "Slide 3",
  },
];
