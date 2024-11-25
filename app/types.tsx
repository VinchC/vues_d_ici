export type MediaProps = {
  href: string;
  icon: any;
  label: string;
}

export type DistributionPlacesProps = {
  business_name: string;
  address?: string;
  city?: string;
  district?: string;
}

export type NavLinkProps = {
  href: string;
  title: string;
};

export type CategoryProps = {
  title: string;
  picture: string;
  alt: string;
  data_twe_carousel_active?: string | undefined,
  href: string;
};

export type CarouselSliderProps = {
  data_twe_slide: string,
  path_d: string,
  title: string,
  className: string,
};

export type CarouselButtonProps = {
  data_twe_slide_to: string,
  aria_label: string,
  data_twe_carousel_active?: string | undefined,
};

export type CarouselPictureProps = {
  picture: string,
  alt: string,
  title: string,
  data_twe_carousel_active?: string | undefined,
};

export type ArticleProps = {
  filter(title: string): unknown;
  id: number;
  picture: string,
  alt: string,
  title: string,
  chapeau: string,
  text?: string;
  createdAt: string;
};

