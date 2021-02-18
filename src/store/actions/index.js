import { DEFAULT } from "../constants";
export const ADD_PREV_POST = "ADD_PREV_POST";
export const ADD_NEXT_POST = "ADD_NEXT_POST";

export const defaultAction = () => (dispatch) => {
  dispatch({
    type: DEFAULT,
  });
};

export const addPrevPost = (prevPost) => {
  return {
    type: ADD_PREV_POST,
    prevPost,
  };
};

export const addNextPost = (nextPost) => {
  return {
    type: ADD_NEXT_POST,
    nextPost,
  };
};
