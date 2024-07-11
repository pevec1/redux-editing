import { nanoid } from "nanoid";
import { EDIT_SERVICE } from "../actions/actionTypes";
const initialState = [];
export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE:
      const { id, name, price } = action.payload;
      return state.map((service) =>
        service.id === id ? { ...service, name, price: Number(price) } : service
      );
    default:
      return state;
  }
}
