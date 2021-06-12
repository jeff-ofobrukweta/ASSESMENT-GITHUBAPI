import axios, { Method, AxiosResponse } from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*", // allow cors from all origin
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", // allowed verbs
    "Content-Type": "application/json"
  }
};

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_BACKEND,
  headers: config?.headers
});

const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params
  });
};

export default request;
