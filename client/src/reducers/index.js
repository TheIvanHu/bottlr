import { combineReducers } from "redux";
import bottleReducer from './bottleReducer';

export default combineReducers({
  item: bottleReducer,

});