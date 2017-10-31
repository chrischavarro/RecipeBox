import React, { Component } from 'react';
import RecipeList from '../containers/recipe_list';
import RecipeForm from '../containers/recipe_form';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <RecipeList />
        <RecipeForm />
      </div>
    );
  }
}
