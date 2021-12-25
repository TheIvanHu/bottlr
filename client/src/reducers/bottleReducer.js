import { GET_BOTTLES, ADD_BOTTLE, DELETE_BOTTLE, BOTTLES_LOADING } from "../actions/types";
const initialState = {
  items : [],
  loading: false


};

export default function(state = initialState, action){
  switch(action.type){
    case GET_BOTTLES:
      return{
        ...state,
        items: action.payload,
        loading: false
      }
    case DELETE_BOTTLE:
      return {
        ...state,
        items:[action.payload, ...state.items]

      }
    case BOTTLES_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
        
  }
}