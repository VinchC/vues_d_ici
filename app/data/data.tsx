import {
  ArticleHomePageProps,
  CarouselButtonProps,
  CarouselSliderProps,
  CategoryProps,
  NavLinkProps,
} from "../types";

import distribution from "@/public/images/distribution_jeunes_ambitieux.jpg";
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
    href: "/association-vues-d-ici",
    title: "L'association",
  },
];

export const CAROUSEL_CATEGORIES: CategoryProps[] = [
  {
    picture: distribution.src,
    alt: "Image représentant la catégorie Mémoire & patrimoine",
    title: "Mémoire & patrimoine",
    data_twe_carousel_active: "data-twe-carousel-active",
  },
  {
    picture: station.src,
    alt: "Image représentant la catégorie Art & culture",
    title: "Art & culture",
  },
  {
    picture: distribution.src,
    alt: "Image représentant la catégorie Nature & Ecologie",
    title: "Nature & Ecologie",
  },
  {
    picture: station.src,
    alt: "Image représentant la catégorie Activités",
    title: "Activités",
  },
  {
    picture: distribution.src,
    alt: "Image représentant la catégorie Editions complètes",
    title: "Editions complètes",
  },
  {
    picture: station.src,
    alt: "Image représentant la catégorie Actu du journal",
    title: "Actu du journal",
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
  {
    data_twe_slide_to: "3",
    aria_label: "Slide 4",
    data_twe_carousel_active: "data-twe-carousel-active",
  },
  {
    data_twe_slide_to: "4",
    aria_label: "Slide 5",
  },
  {
    data_twe_slide_to: "5",
    aria_label: "Slide 6",
  },
];

export const ARTICLES_HOMEPAGE: ArticleHomePageProps[] = [
  {
    id: 1,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "01/11/2024",
  },
  {
    id: 2,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "01/11/2024",
  },
  {
    id: 3,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "01/11/2024",
  },
  {
    id: 4,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "01/11/2024",
  },
  {
    id: 5,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "01/11/2024",
  },
  {
    id: 6,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "01/11/2024",
  },
];
