import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from 'app/containers/App'
import store from 'app/redux/store'

import { fetchSpells } from 'app/redux/actions/spells'

store.dispatch(fetchSpells())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
