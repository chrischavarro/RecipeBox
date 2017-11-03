import { FETCH_RECIPES, DELETE_RECIPE } from '../actions';
import _ from 'lodash';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_RECIPES:
    console.log('Recipe recieved', action.payload, state);
      return state.concat([ action.payload ]);
    case DELETE_RECIPE:
      console.log('Delete request received', action.payload);
      return state.filter( (recipe, index) => index !== action.payload)
    default:
      return state;
  }
}
// return [...state.slice(0, action.payload), ...state.slice(action.payload+1)]
// console.log(state);
  // state.slice([0, action.payload]);
// return state.slice(action.payload.index, action.payload.index);
// return _.omit(state, action.payload.index);
