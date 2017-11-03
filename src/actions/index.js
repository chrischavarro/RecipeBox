import axios from 'axios'
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const DELETE_RECIPE = 'DELETE_RECIPE';
// let indexer = 1;

export function getRecipes(name, ingredients) {
  const request = {
    name: name,
    ingredients: ingredients.split(','),
    key: name
  };

  // localStorage.setItem(request.key, request);

  return {
    type: FETCH_RECIPES,
    payload: request
  }
}

export function deleteRecipe(name, ingredients) {
  const request = {
    name: name,
    ingredients: ingredients,
    key: name
  };

  return {
    type: DELETE_RECIPE,
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
