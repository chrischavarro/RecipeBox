import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Recipe from './recipe';

class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.renderRecipes = this.renderRecipes.bind(this);
  }

  componentDidMount() {
      {this.props.getRecipes}
      for (var length in localStorage) {
        console.log(length + ':' + localStorage[length].name)
      }
  }

  renderRecipes(recipe, index) {
    return (
      <Recipe data={recipe} index={index} key={recipe.name} />
    )
  }

  render() {
    return (
      <div>
        <div className="col-sm-10">
            {this.props.recipes.map((recipe, index) => this.renderRecipes(recipe,index))}
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect (mapStateToProps, { getRecipes })(RecipeList);
