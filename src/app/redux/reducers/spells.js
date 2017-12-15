import spell_data from 'data/spells'

const initialSpellState = {
  spells: spell_data
};

debugger

const spells =  (state = initialSpellState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "??":
      return newState;

    default:
      return state;
  }
};

export default spells
