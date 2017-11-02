import { FETCH_RECIPES } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log('Recipe recieved', action.payload);
      return state.concat([ action.payload ]);
    default:
      return state;
  }
}
