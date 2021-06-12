import scrapeUrl from "../../../utility/urlScrapper";
import { setEnums } from "./action";

export const getEnums = () => {
  return async (dispatch: any) => {
    const data = await scrapeUrl();
    dispatch(setEnums(data));
  };
};
