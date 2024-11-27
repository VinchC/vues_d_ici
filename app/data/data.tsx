import {
  CarouselButtonProps,
  CarouselSliderProps,
  CategoryProps,
  NavLinkProps,
  MediaProps,
  DistributionPlacesProps,
  ArticleProps,
  CharterProps,
} from "../types";

import distribution from "@/public/images/distribution_jeunes_ambitieux.jpg";
import station from "@/public/images/station_serge_gainsbourg.jpg";
import { FacebookIcon } from "../_components/icons/FacebookIcon";
import { GoogleIcon } from "../_components/icons/GoogleIcon";
import { InstagramIcon } from "../_components/icons/InstagramIcon";
import { HelloAssoIcon } from "../_components/icons/HelloAssoIcon";
import { AssociationProps } from "../types";

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
    href: "/association",
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
    href: "/association#nous-rejoindre",
    title: "Nous rejoindre",
  },
  {
    href: "/association#nous-soutenir",
    title: "Nous soutenir",
  },
  {
    href: "/contact",
    title: "Nous contacter",
  },
  {
    href: "/association",
    title: "Qui sommes-nous ?",
  },
];

export const CATEGORIES: CategoryProps[] = [
  {
    id: 1,
    picture: distribution.src,
    alt: "Image représentant la catégorie Mémoire & patrimoine",
    title: "Mémoire & patrimoine",
    data_twe_carousel_active: "data-twe-carousel-active",
    href: "/articles?category=",
  },
  {
    id: 2,
    picture: station.src,
    alt: "Image représentant la catégorie Art & culture",
    title: "Art & culture",
    href: "/articles?category=",
  },
  {
    id: 3,
    picture: distribution.src,
    alt: "Image représentant la catégorie Nature & Ecologie",
    title: "Nature & Ecologie",
    href: "/articles?category=",
  },
  {
    id: 4,
    picture: station.src,
    alt: "Image représentant la catégorie Activités",
    title: "Activités",
    href: "/articles?category=",
  },
  {
    id: 5,
    picture: distribution.src,
    alt: "Image représentant la catégorie Editions complètes",
    title: "Editions complètes",
    href: "/articles?category=",
  },
  {
    id: 6,
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

export const ASSOCIATION: AssociationProps[] = [
  {
    title: "Adhérer",
    text: "Pour adhérer à l’association, remplissez le formulaire et retournez le par voie postale avec un chèque. \n Vous pouvez également retrouver le bulletin d’adhésion dans chacun des numéros du journal.",
    textButton: "Télécharger le bulletin d'adhésion",
  },
  {
    title: "Faire un don",
    text: "Pour nous soutenir, et nous aider à financer le prochain numéro, cliquez sur le lien ci-dessous. \n Après le paiement, vous recevrez le reçu pour la défiscalisation directement dans votre boîte mail.",
    textButton: "Faire un don",
  },
];

export const ARTICLES: ArticleProps[] = [
  {
    id: 1,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 1",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.`,
    createdAt: "01/11/2024",
    categoryId: 1,
    newspaperId: 1,
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
    categoryId: 2,
    newspaperId: 2,
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
    categoryId: 3,
    newspaperId: 3,
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
    categoryId: 4,
    newspaperId: 4,
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
    categoryId: 5,
    newspaperId: 5,
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
    categoryId: 6,
    newspaperId: 6,
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
    categoryId: 1,
    newspaperId: 7,
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
    categoryId: 2,
    newspaperId: 8,
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
    categoryId: 3,
    newspaperId: 9,
  },
  {
    id: 10,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 10",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "10/11/2024",
    categoryId: 4,
    newspaperId: 10,
  },
  {
    id: 11,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 11",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "11/11/2024",
    categoryId: 5,
    newspaperId: 11,
  },
  {
    id: 12,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 12",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "12/11/2024",
    categoryId: 6,
    newspaperId: 12,
  },
  {
    id: 13,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 13",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "13/11/2024",
    categoryId: 1,
    newspaperId: 13,
  },
  {
    id: 14,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 14",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "14/11/2024",
    categoryId: 2,
    newspaperId: 14,
  },
  {
    id: 15,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 15",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem pops ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "15/11/2024",
    categoryId: 3,
    newspaperId: 15,
  },
  {
    id: 16,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 16",
    chapeau:
      "Lorem pops ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "16/11/2024",
    categoryId: 4,
    newspaperId: 16,
  },
  {
    id: 17,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 17 pops",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "17/11/2024",
    categoryId: 5,
    newspaperId: 17,
  },
  {
    id: 18,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 18 Pops",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "18/11/2024",
    categoryId: 6,
    newspaperId: 18,
  },
];

export const CHARTER: CharterProps[] = [
  {
    id: 1,
    title: "2. SUR LES RÔLES DE CHACUN",
    text: [
      "Rédacteur : réalise des articles",
      "Photographe : réalise des photos",
      "Contributeur d’idées : participe aux réunions, apporte ses idées et propositions",
      "Coordinateur éditorial : suivi du chemin de fer, réception des articles et autres contenus, vérification de la cohérence et de la conformité de ces contenus, propositions d’amélioration des textes écrits.",
      "Relecteur : relecture et corrections typographiques",
      "Animateur du groupe : programme les réunions, propose l’ordre du jour, détermine le mode de compte-rendu, gère le calendrier",
      "Contact pub : démarche les commerçants et autres annonceurs potentiels pour des encarts pub dans le journal",
      "Maquettiste : réalise la maquette",
      "Coordinateur de l’impression : suit les relations avec l’imprimeur",
      "Distributeur des exemplaires papier : alimente en journaux les points de distribution",
      "Animateur des réseaux sociaux : alimente notre présence numérique (Facebook, blog…)",
    ],
  },
];
