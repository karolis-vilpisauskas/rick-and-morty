import { GET_CHARACTERS } from "../actions/types";

const initialState = {
  items: [],
  page: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      const pageNum = state.page + 1;
      return {
        ...state,
        items: action.payload,
        page: pageNum
      };
    default:
      return state;
  }
}
