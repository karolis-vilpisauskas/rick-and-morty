import { GET_CHARACTERS } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
