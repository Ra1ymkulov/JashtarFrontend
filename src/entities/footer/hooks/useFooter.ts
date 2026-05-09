import { useQuery } from "@tanstack/react-query";
import { footerKeys, getFooter } from "../api/footerApi";

export const useFooter = () => {
  return useQuery({
    queryKey: footerKeys.info(),
    queryFn: getFooter,
  });
};
