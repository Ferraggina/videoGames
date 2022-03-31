import {
  GET_GAMES,
  POST_GAMES,
  GET_GENRES,
  SEARCH_BY_ID,
  ORDER_BY_NAME,
  FILTER_CREATED,
  SEARCH_BY_NAME,
  FILTER_BY_GENRE,
  FILTER_BY_RATING,
} from "../Actions";

const initialState = {
  fullGames: [],
  games: [],
  genres: [],
  detail: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
        fullGames: payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    case FILTER_CREATED:
      const allVideogames = state.fullGames;
      const createdFilter =
        payload === "created"
          ? allVideogames.filter((el) => el.createdInDb)
          : allVideogames.filter((el) => !el.createdInDb);
      return {
        ...state,
        games: payload === "All" ? allVideogames : createdFilter,
      };
    case SEARCH_BY_ID:
      return {
        ...state,
        detail: payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        games: payload,
      };
    case POST_GAMES:
      return {
        ...state,
      };
    case ORDER_BY_NAME:
      let sortedArr =
        payload === "asc"
          ? state.games.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.games.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        games: sortedArr,
      };
    case FILTER_BY_RATING:
      let sortedRating =
        payload === "asc"
          ? state.games.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.games.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        games: sortedRating,
      };
    case FILTER_BY_GENRE:
      const todosVideogames = state.fullGames;
      const filteredGen = todosVideogames.filter((e) =>
        e.genres.includes(payload)
      );
      return {
        ...state,
        games: filteredGen,
      };
    default:
      return state;
  }
};

export default rootReducer;
