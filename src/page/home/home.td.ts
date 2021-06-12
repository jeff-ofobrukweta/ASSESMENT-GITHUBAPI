import { string } from "prop-types";

export type IqueryReactOption = {
  data?: Array<Object>;
  isLoading: Boolean;
  isError: Boolean;
  isSuccess: Boolean;
};

export interface Ipopular_repository {
  description?: string;
  repositoryName?: string;
  url?: string;
}

//popular types for responses
export interface Ideveloper<T>{
    avatar?: string;
    name?: string;
    popularRepository?: T;
    rank?: number;
    since?: string;
    url?: string;
    username?: string;
}
