import axios from 'axios'
export const FETCH_RECIPES = 'FETCH_RECIPES'
// let indexer = 1;

export function getRecipes(name, ingredients) {
  const request = {
    name: name,
    ingredients: ingredients.split(',')
  };

  return {
    type: FETCH_RECIPES,
    payload: request
  }
}

export function createRecipe(name, ingredients) {

  // indexer = localStorage.getItem(0)
  const request = { name: name,
                    ingredients: ingredients.split(','),
                    key: indexer };
  // localStorage.setItem(request.key, request);
  // indexer++;
  // localStorage.setItem(0, indexer);
  console.log(request)
  // console.log(localStorage.getItem(0))

  return {
    type: CREATE_RECIPE,
    payload: request
  }
}

// store index variable in local storage
// Recipe - has name, ingredients info passed as props for ingredients object
// Ingredients - rendered as table
// localStorage.clear();
