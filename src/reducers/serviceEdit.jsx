import { nanoid } from "nanoid";
import { EDIT_SERVICE } from "../actions/actionTypes";
const initialState = [{ id: nanoid(), name: "111", price: "222" }];
export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE:
        const { id, name, price } = action.payload;
      return { id: id, name: name, price: price }
    default:
      return state;
  }
}
