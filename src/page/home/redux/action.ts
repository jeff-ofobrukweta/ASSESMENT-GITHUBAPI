import { SET_ALLOWED_ENUMS } from "./types";

export const setEnums = (enums: any) => {
  return {
    type: SET_ALLOWED_ENUMS,
    enums
  };
};


