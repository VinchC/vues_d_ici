import { CategoryProps, NavLinkProps } from "../types";

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
