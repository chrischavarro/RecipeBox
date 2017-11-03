import { FETCH_RECIPES, DELETE_RECIPE } from '../actions';
import _ from 'lodash';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log('Recipe recieved', action.payload);
      return state.concat([ action.payload ]);
    case DELETE_RECIPE:
      console.log('Delete request received', action.payload);
      console.log(state);
      return _.omit(state, action.payload);
      console.log(state);
    default:
      return state;
  }
}
