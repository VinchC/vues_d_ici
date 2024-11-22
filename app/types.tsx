export type NavLinkProps = {
  href: string;
  title: string;
};

export type CategoryProps = {
  title: string;
  picture: string;
  alt: string;
  data_twe_carousel_active?: string | undefined,
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

export type ArticleHomePageProps = {
  id: number;
  picture: string,
  alt: string,
  title: string,
  chapeau: string,
  text?: string;
  createdAt: string;
};

