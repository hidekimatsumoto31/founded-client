import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import animal from 'modules/animals/reducers'

const reducers = combineReducers({ animal })

const middleware = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducers, undefined, middleware)

export default function AppState ({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

AppState.propTypes = {
  children: PropTypes.node
}
