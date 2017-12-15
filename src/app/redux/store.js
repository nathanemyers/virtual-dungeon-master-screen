import { createStore  } from 'redux'
import reducers from 'app/redux/reducers/index'
const store = createStore(reducers)

export default store
