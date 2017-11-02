import React, { Component } from 'react';
import RecipeList from '../containers/recipe_list';
import RecipeForm from '../containers/recipe_form';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="col-sm-12 header">
        Welcome to RecipeBox!
      </div>
        <RecipeList />
        <RecipeForm />
      </div>
    );
  }
}
