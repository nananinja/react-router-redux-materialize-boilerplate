import { createStore, compose, composeEnhancers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import createReducer from 'reducers/createReducer'

// Use configureStore to avoid collision of name with Redux createStore
const configureStore = (initialState = {}) => {
  // Middelware
  let middleware = [thunk];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }
;
  // Enhancers
  let enhancers = [];

  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
  console.dir(createReducer);
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    ),
  );

  return store;
}

export default configureStore;
