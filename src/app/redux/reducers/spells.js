import spell_data from 'data/spells.json'

const initialSpellState = {
  spells: spell_data,
  loading: true,
  error: null,
};

const spells =  (state = initialSpellState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "SPELLS_REQUEST":
      newState.loading = true
      return newState;
    case "SPELLS_SUCCESS":
      newState.loading = false
      newState.spells = action.spells
      return newState;
    case "SPELLS_ERROR":
      newState.loading = false
      newState.error = action.error
      return newState;
    default:
      return state;
  }
};

export default spells
