import { combineReducers } from 'redux';
import { globalReducer } from './global';
import { homeReducer } from './home';
import { productReducer } from './product';

const reducer = combineReducers({
  globalReducer,
  homeReducer,
  productReducer
});

export default reducer;
