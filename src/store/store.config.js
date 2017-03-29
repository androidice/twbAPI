import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function storeConfig(initialState){
  return createStore(
    applyMiddleware(thunk)
  );
}
