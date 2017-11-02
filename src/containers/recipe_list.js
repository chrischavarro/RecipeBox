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

  renderRecipes(index, recipe) {
    return (
      <Recipe data={index} index={index} key={index} />
    )
  }

  render() {

    return (
      <div>
        <div className="table table-hover">

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
