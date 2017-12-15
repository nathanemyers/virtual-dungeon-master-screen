import { combineReducers } from 'redux'
//import monsters from 'app/redux/reducers/monsters'
import spells from 'app/redux/reducers/spells'

const reducers = combineReducers({
  //monsters,
  spells: spells,
})

export default reducers
