import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Recipe from './recipe';
import _ from 'lodash';

class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.renderRecipes = this.renderRecipes.bind(this);
  }

  componentDidMount() {
      {this.props.getRecipes}
  }

  // renderRecipes() {
  //   return _.map(this.props.recipes), recipe => {
  //     console.log(recipe)
  //   }
  //
  // }
  renderRecipes(recipe, index) {
    console.log(this.props.recipes)
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
