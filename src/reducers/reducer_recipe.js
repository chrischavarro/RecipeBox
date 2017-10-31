import { FETCH_RECIPES, CREATE_RECIPE } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload.data;
    case CREATE_RECIPE:
      return action.payload.data;
    default:
      return state;
  }
}
