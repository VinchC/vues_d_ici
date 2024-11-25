import {
  ArticleHomePageProps,
  CarouselButtonProps,
  CarouselSliderProps,
  CategoryProps,
  NavLinkProps,
  MediaProps,
  DistributionPlacesProps,
} from "../types";

import distribution from "@/public/images/distribution_jeunes_ambitieux.jpg";
import station from "@/public/images/station_serge_gainsbourg.jpg";
import { FacebookIcon } from "../_components/icons/FacebookIcon";
import { GoogleIcon } from "../_components/icons/GoogleIcon";
import { InstagramIcon } from "../_components/icons/InstagramIcon";
import { HelloAssoIcon } from "../_components/icons/HelloAssoIcon";

export const MAIN_DISTRIBUTION_PLACES: DistributionPlacesProps[] = [
  {
    business_name: "Centre Paris Aim'Clavel",
    address: "24 bis rue Clavel",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "Centre Paris Aim'Clavel",
    address: "24 bis rue Clavel",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "Centre Paris Aim'Clavel",
    address: "24 bis rue Clavel",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "Centre Paris Aim'Clavel",
    address: "24 bis rue Clavel",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "Centre Paris Aim'Clavel",
    address: "24 bis rue Clavel",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "Centre Paris Aim'Clavel",
    address: "24 bis rue Clavel",
    city: "Paris",
    district: "19ème",
  },
];

export const SECONDARY_DISTRIBUTION_PLACES: DistributionPlacesProps[] = [
  {
    business_name: "Bibliothèque de la Place des Fêtes",
  },
  {
    business_name: "La Fabrik coopérative",
  },
  {
    business_name: "La Maison de la Place des Fêtes",
  },
  {
    business_name: "Le DOC",
  },
  {
    business_name: "La librairie Boréalia",
  },
  {
    business_name: "Le foyer Pauline Roland",
  },
];

export const SOCIAL_MEDIA: MediaProps[] = [
  {
    href: "https://www.facebook.com/Journal.Vuesdici",
    icon: <FacebookIcon />,
    label: "Lien vers la page Facebook de Vues d'ici.",
  },
  {
    href: "https://www.google.fr/maps/place/Pl.+des+F%C3%AAtes,+75019+Paris/@48.8771718,2.3915075,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66dbfb478cde1:0x8bc8dca1c6be6a3d!8m2!3d48.8771683!4d2.3940824!16s%2Fg%2F122czk_y?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
    icon: <GoogleIcon />,
    label: "Lien vers la page Google Maps centrée sur la Place des Fêtes.",
  },
  {
    href: "https://www.instagram.com/vues_d_ici_/",
    icon: <InstagramIcon />,
    label: "Lien vers la page Instagram de Vues d'ici.",
  },
  {
    href: "https://www.helloasso.com/",
    icon: <HelloAssoIcon />,
    label: "Lien vers la page du site Hello Asso.",
  },
];

export const NAVBAR_LINKS: NavLinkProps[] = [
  {
    href: "/articles",
    title: "Articles",
  },
  {
    href: "/#nous-trouver",
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

export const FOOTER_LINKS: NavLinkProps[] = [
  {
    href: "/articles",
    title: "Articles",
  },
  {
    href: "/#nous-trouver",
    title: "Nous trouver",
  },
  {
    href: "/association-vues-d-ici#nous-rejoindre",
    title: "Nous rejoindre",
  },
  {
    href: "/association-vues-d-ici#nous-soutenir",
    title: "Nous soutenir",
  },
  {
    href: "/contact",
    title: "Nous contacter",
  },
  {
    href: "/association-vues-d-ici",
    title: "Qui sommes-nous ?",
  },
];

export const CAROUSEL_CATEGORIES: CategoryProps[] = [
  {
    picture: distribution.src,
    alt: "Image représentant la catégorie Mémoire & patrimoine",
    title: "Mémoire & patrimoine",
    data_twe_carousel_active: "data-twe-carousel-active",
    href: "/articles?category=",
  },
  {
    picture: station.src,
    alt: "Image représentant la catégorie Art & culture",
    title: "Art & culture",
    href: "/articles?category=",
  },
  {
    picture: distribution.src,
    alt: "Image représentant la catégorie Nature & Ecologie",
    title: "Nature & Ecologie",
    href: "/articles?category=",
  },
  {
    picture: station.src,
    alt: "Image représentant la catégorie Activités",
    title: "Activités",
    href: "/articles?category=",
  },
  {
    picture: distribution.src,
    alt: "Image représentant la catégorie Editions complètes",
    title: "Editions complètes",
    href: "/articles?category=",
  },
  {
    picture: station.src,
    alt: "Image représentant la catégorie Actu du journal",
    title: "Actu du journal",
    href: "/articles?category=",
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
    title: "Titre de l'article 1",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "01/11/2024",
  },
  {
    id: 2,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 2",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "02/11/2024",
  },
  {
    id: 3,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 3",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "03/11/2024",
  },
  {
    id: 4,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 4",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "04/11/2024",
  },
  {
    id: 5,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 5",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "05/11/2024",
  },
  {
    id: 6,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 6",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "06/11/2024",
  },
  {
    id: 7,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 7",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "07/11/2024",
  },
  {
    id: 8,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 8",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "08/11/2024",
  },
  {
    id: 9,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 9",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "09/11/2024",
  },
];
