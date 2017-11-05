import axios from 'axios'
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
// let indexer = 1;

export function getRecipes(name, ingredients) {
  const request = {
    name: name,
    ingredients: ingredients.split(','),
    key: name
  };

  return {
    type: FETCH_RECIPES,
    payload: request
  }
}

export function deleteRecipe(index) {
  return {
    type: DELETE_RECIPE,
    payload: index
  }
}

export function editRecipe(name, ingredients, index) {
  const request = {
    name: name,
    ingredients: ingredients,
    index: index
  }

  return {
    type: EDIT_RECIPE,
    payload: request
  }
}
// localStorage.setItem(request.key, request);
// localStorage.setItem(0, indexer);
// localStorage.clear();
// console.log(localStorage.getItem(0))

// store index variable in local storage
// Recipe - has name, ingredients info passed as props for ingredients object
// Ingredients - rendered as table
  // localStorage.setItem(request.key, request);
