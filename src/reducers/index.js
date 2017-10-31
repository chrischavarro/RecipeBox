import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipe'

const rootReducer = combineReducers({
  recipies: RecipeReducer
});

export default rootReducer;
