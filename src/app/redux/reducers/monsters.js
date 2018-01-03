const initialmonsterState = {
  monsters: [],
  loading: true,
  error: null,
};

const monsters =  (state = initialmonsterState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "MONSTERS_REQUEST":
      newState.loading = true
      return newState;
    case "MONSTERS_SUCCESS":
      newState.loading = false
      // filter out license
      const filtered_monsters = action.monsters.filter((monster) => !monster.license)
      newState.monsters = filtered_monsters
      return newState;
    case "MONSTERS_ERROR":
      newState.loading = false
      newState.error = action.error
      return newState;
    default:
      return state;
  }
};

export default monsters
