import request from "../api.service/axios.factory";

const scrapeUrl = async () => {
  const { data }: any = await request("GET", "/openapi.json", "");
  const schema = data?.components?.schemas;
  const scrappedData = {
    allowedDates: schema.AllowedDateRanges.enum,
    allowedProgrammingLanguages: schema?.AllowedProgrammingLanguages?.enum,
    allowedSpokenLanguages: schema?.AllowedSpokenLanguages?.enum
  };
  return scrappedData;
};



export default scrapeUrl;
