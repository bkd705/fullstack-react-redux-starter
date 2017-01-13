import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas/index'
import { checkWebToken } from './utils/authUtils'
import { setToken } from './redux/actions/auth/authActions'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(rootSaga)

if(localStorage.userToken) {
  if(checkWebToken(localStorage.userToken)) {
    store.dispatch(setToken())
  } else {
    localStorage.removeItem('userToken')
  }
}

// Routes are all in a separate file
import Router from './router'

// Router's root element
ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('root')
)
