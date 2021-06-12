export const getDevelopers = (match:any, query:any) =>{
    return `/developers${
      match?.params?.language ? `/${match?.params?.language}` : ""
    }?${query.get("since") ? `&since=${query.get("since")}` : ""}${
      query.get("spoken_language_code")
        ? `&spoken_language_code=${query.get("spoken_language_code")}`
        : ""
    }`
  }


  export const getReposirories = (match:any, query:any)=>{
    return `/repositories${
      match?.params?.language ? `/${match?.params?.language}` : ""
    }?${query.get("since") ? `&since=${query.get("since")}` : ""}${
      query.get("spoken_language_code")
        ? `&spoken_language_code=${query.get("spoken_language_code")}`
        : ""
    }`
  }