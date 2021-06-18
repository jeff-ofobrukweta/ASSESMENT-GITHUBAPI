export const getResources = (resource:any, match:any, query:any) =>{
    return `/${resource}${
      match?.params?.language ? `/${match?.params?.language}` : ""
    }?${query.get("since") ? `&since=${query.get("since")}` : ""}${
      query.get("spoken_language_code")
        ? `&spoken_language_code=${query.get("spoken_language_code")}`
        : ""
    }`
  }