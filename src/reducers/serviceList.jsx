
import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from "../actions/actionTypes";
const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];
export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case REMOVE_SERVICE:
      return state.filter((service) => service.id !== id);
    case EDIT_SERVICE:
      const { id, name, price } = action.payload;
      return state.map((service) =>
        service.id === id ? { ...service, name, price: Number(price) } : service
      );
    default:
      return state;
  }
}