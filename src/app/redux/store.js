import { createStore, applyMiddleware  } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from 'app/redux/reducers/index'

const logger = createLogger({
  level: 'info'
})
const store = createStore(reducers, applyMiddleware(logger))

export default store
