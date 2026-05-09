export type { News, NewsSection } from "./model/types";
export { useHomeNews } from "./hooks/useHomeNews";
export { useNewsPage } from "./hooks/useNewsPage";
export { useNewsDetail } from "./hooks/useNewsDetail";
export {
  getNewsPage,
  getHomeNews,
  getNewsDetail,
  newsKeys,
} from "./api/newsApi";
