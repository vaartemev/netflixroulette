export const movie = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case FETCH_MOVIE_BY_ID:
      return { ...state, movie: action.payload };

    default:
      return state;
  }
};
