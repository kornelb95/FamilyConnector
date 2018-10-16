import { TOGGLE_MENU } from "./types";

export const toggleMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_MENU,
    payload: {}
  });
};
