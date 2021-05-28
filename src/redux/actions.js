import { SET_MENU_DATA, SET_CURRENT_MENU } from "./actionTypes";

export const setMenuData = (menu) => ({
  type: SET_MENU_DATA,
  payload: { menu }
});

export const setCurrentMenu = (menu) => ({
  type: SET_CURRENT_MENU,
  payload: { menu }
});
