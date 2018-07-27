import rootReducer from './reducers/tasks';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// export function configureStore() {
//   const store = createStore() {
//     rootReducer,
//     applyMiddleware(thunk)
//   };

//   return store;
// }

export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  );

  return store;
}