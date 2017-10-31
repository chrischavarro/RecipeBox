import axios from 'axios'
export const FETCH_RECIPES = 'FETCH_RECIPES'
export const CREATE_RECIPE = 'CREATE_RECIPE'

export function getRecipes() {
  const request = '';

  return {
    type: FETCH_RECIPES,
    payload: request
  }
}

export function createRecipe(name, ingredients) {
  const request = { name: name,
                    ingredients: ingredients };
  localStorage.setItem(key, result)
  return {
    type: CREATE_RECIPE,
    payload: request
  }
}
// Recipe - has name, ingredients info passed as props for ingredients object
// Ingredients - rendered as table
