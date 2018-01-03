import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from 'app/App'
import store from 'app/redux/store'

import { fetchSpells } from 'app/redux/actions/spells'
import { fetchMonsters } from 'app/redux/actions/monsters'

store.dispatch(fetchSpells())
store.dispatch(fetchMonsters())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container')
);
