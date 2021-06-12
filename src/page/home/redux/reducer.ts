import { SET_ALLOWED_ENUMS } from "./types";

const INITIAL_STATE = {
  enums: {}
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_ALLOWED_ENUMS:
      return { ...state, enums: { ...action.enums } };
    default:
      return state;
  }
};

export default reducer;
