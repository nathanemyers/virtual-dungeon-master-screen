import { combineReducers } from 'redux'
import monsters from 'app/redux/reducers/monsters'
import spells from 'app/redux/reducers/spells'
import ui from 'app/redux/reducers/ui'

const reducers = combineReducers({
  monsters,
  spells,
  ui,
})

export default reducers
