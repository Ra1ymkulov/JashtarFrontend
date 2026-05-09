export interface News {
  id: number;
  title: string;
  image: string;
  data: string;
  short_text: string;
}

export interface NewsSection {
  id: number;
  title: string;
  news_items: News[];
}
