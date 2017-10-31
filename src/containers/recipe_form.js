import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../actions';

class RecipeForm extends Component {
  constructor(props){
    super(props)

    this.state = { recipeName: '',
                   recipeIngredients: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.createRecipe(name, ingredients)
    // call on action with search term as parameter
    // reset fields
    // close modal
  }
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit()}>
        <input
          type="text"
          name="recipeName"
          placeholder="Recipe name"
          value={this.state.recipeName}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          name="recipeIngredients"
          placeholder="Enter your ingredients, separated by commas"
          value={this.state.recipeIngredients}
          onChange={this.onInputChange}
        />
        <button>Add Recipe</button>
        <button>Cancel</button>
      </form>
    )
  };
}

export default connect (null, { createRecipe })(RecipeForm)

// onSubmit should call on creation action
