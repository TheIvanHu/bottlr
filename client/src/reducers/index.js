import { combineReducers } from "redux";
import itemReducer from './bottleReducer';

export default combineReducers({
  item: bottleReducer,

});