import axios from 'axios';
import { GET_BOTTLES, ADD_BOTTLE, DELETE_BOTTLE, BOTTLES_LOADING} from "./types";

export const getBottles = () => dispatch =>{
  dispatch(setBottlesLoading());
  axios
    .get('/api/bottles')
    .then(res => dispatch({
      type: GET_BOTTLES,
      payload: res.data
    }))
};
export const addBottle = item =>{
  return{
    type: ADD_BOTTLE,
    payload: item
  };
};
export const deleteBottle = id =>{
  return{
    type: DELETE_BOTTLE,
    payload: id
  };
};
export const setBottlesLoading = () => {
  return {
    type: BOTTLES_LOADING
  }
}