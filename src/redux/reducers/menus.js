import { SET_MENU_DATA, SET_CURRENT_MENU } from "../actionTypes";

const initialState = {
  data: null,
  current: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MENU_DATA: {
      const { menu } = action.payload;
      return {
        ...state,
        data: [...menu]
      };
    }
    case SET_CURRENT_MENU: {
      const { menu } = action.payload;
      return {
        ...state,
        current: { ...menu }
      };
    }
    default:
      return state;
  }
}
