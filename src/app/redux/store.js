import { createStore, applyMiddleware  } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from 'app/redux/reducers/index'

const logger = createLogger({
  level: 'info'
})

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store
