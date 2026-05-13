export interface HomeSecton {
  id: number;
  slug: string;
  home_title: string;
  banner: string;
  banners_list: BannerList[];
  about_movent: string;
  about_blocks: AboutBlocks[];
}
export interface BannerList {
  id: number;
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  images: Images[];
}
export interface Images {
  id: number;
  image: string;
}
export interface AboutBlocks {
  id: number;
  description: string;
  advantages: Advantages[];
}
export interface Advantages {
  id: number;
  title: string;
  text: string;
}
