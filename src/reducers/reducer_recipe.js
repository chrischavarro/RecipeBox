import { FETCH_RECIPES, DELETE_RECIPE, EDIT_RECIPE } from '../actions';
import update from 'immutability-helper';
import _ from 'lodash';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_RECIPES:
    // console.log('Recipe recieved', action.payload, state);
      return state.concat([ action.payload ]);
    case DELETE_RECIPE:
      // console.log('Delete request received', action.payload);
      return state.filter( (recipe, index) => index !== action.payload)
    case EDIT_RECIPE:
      // console.log(state, action.payload)
      console.log([action.payload.index], action.payload.name, action.payload.ingredients)
      return update(state, {
          [action.payload.index]: {
            name: {$set: action.payload.name},
            ingredients: {$set: action.payload.ingredients}
          }
      });
    default:
      return state;
  }
}
