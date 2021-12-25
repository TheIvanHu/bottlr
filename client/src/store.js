import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//automatically takes from index.js so don't need to specify name of file
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleWare),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_()
  )
  
);

export default store;