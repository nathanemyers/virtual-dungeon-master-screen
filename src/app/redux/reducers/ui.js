const initialUIState = {
  search_term: "",
  min_search: 1,
};

const spells =  (state = initialUIState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "UPDATE_SEARCH":
      newState.search_term = action.search_term
      return newState;
    default:
      return state;
  }
};

export default spells
