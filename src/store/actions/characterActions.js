import { GET_CHARACTERS } from "./types";
import axios from "axios";

export const getCharacters = page => dispatch => {
  axios.get(`character/?page=${page}`).then(res => {
    const payload = res.data.results ;
    dispatch({ type: GET_CHARACTERS, payload });
  });
};
