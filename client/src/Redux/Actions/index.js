import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const POST_GAMES = "POST_GAMES";
export const GET_GENRES = "GET_GENRES";
export const SEARCH_BY_ID = "SEARCH_BY_ID";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_CREATED = "FILTER_CREATED";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_RATING = "FILTER_BY_RATING";

export function getGames() {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_GAMES,
      payload: response.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: GET_GENRES,
      payload: response.data,
    });
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}
export function getDetail(id) {
  if (id) {
    return async function (dispatch) {
      var response = await axios.get(`http://localhost:3001/videogames/${id}`);
      console.log(response.data);
      return dispatch({
        type: SEARCH_BY_ID,
        payload: response.data,
      });
    };
  }
  return {
    type: SEARCH_BY_ID,
    payload: [],
  };
}
export function getNameVgames(name) {
  return async function (dispatch) {
    try {
      var response = await axios.get(
        "http://localhost:3001/videogames?name=" + name
      );
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postgames(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/videogame",
      payload
    );

    return response;
  };
}
export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}
export function orderByRating(payload) {
  return {
    type: FILTER_BY_RATING,
    payload,
  };
}
export function filterByGenres(payload) {
  return {
    type: FILTER_BY_GENRE, //HAY QUE PROBARLO
    payload,
  };
}
