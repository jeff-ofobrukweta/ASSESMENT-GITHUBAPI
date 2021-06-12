
// GET SHORTENED LENGTH OF STRING
  const getTruncatedText = (payload:string, nlength:number) => {
    if (payload?.length > nlength) return `${payload.slice(0, nlength)}...`;
    else return payload;
  };
  
  
  export {
    getTruncatedText
  };