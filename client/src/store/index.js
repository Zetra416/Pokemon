import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers/pokemonReducer';
import favouriteReducer from './reducers/favouriteReducer';

const reducer = combineReducers({
  pokemonReducer,
  favouriteReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
