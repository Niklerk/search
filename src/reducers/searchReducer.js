import { types } from "../types/types";

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case types.google:
      return [...action.payload.data];
    case types.bing:
      return [...action.payload.data];
    case types.both:
      return [...action.payload.data];
    default:
      return state;
  }
};
