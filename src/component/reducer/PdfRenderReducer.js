/** @format */
import { algorithm } from "../Helper";

export const PdfRenderReducer = (state, action) => {
  switch (action.type) {
    case "addItemToList":
      return algorithm(action.value);
    case "removeItemFromList":
      return algorithm(action.value);
    case "updateItemInList":
      return algorithm(action.value);
    case "insert":
      return action.value;
    default:
      return state;
  }
};
