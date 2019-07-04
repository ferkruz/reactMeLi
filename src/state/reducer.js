import { SET_ITEMS, SET_QUERY } from './types';

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload
      }
      break;
    case SET_QUERY:
      return {
        ...state,
        q: action.payload
      }
      break;
    default:
      return state;
  }
}
