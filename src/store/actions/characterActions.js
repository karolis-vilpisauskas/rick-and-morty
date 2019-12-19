import { GET_CHARACTERS } from "./types";
import axios from "axios";

export const getCharacters = page => dispatch => {
  axios.get(`character/?page=${page}`).then(res => {
    dispatch({ type: GET_CHARACTERS, payload: res.data.results });
  });
};
