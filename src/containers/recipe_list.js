import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';

class RecipeList extends Component {
  constructor(props) {
    super(props)

    this.renderRecipes = this.renderRecipes.bind(this);
  }

  componentDidMount() {
      {this.props.getRecipes}
  }

  renderRecipes() {

  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          {this.renderRecipes}
        </table>
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
