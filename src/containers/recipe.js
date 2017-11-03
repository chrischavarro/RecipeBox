import React, { Component } from 'react';
import { Collapse, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.renderIngredients = this.renderIngredients.bind(this);
  }
  renderIngredients(ingredient, index) {
    return (
      <li key={index} className="list-group-item">
      {ingredient}
      </li>
    )
  }
  render() {
    return (
      <div className="col-sm-12 col-sm-offset-1 recipe">
        <div className="recipe-name"><a onClick={() => this.setState({ open: !this.state.open })}>{this.props.data.name}</a></div>
        <Collapse in={this.state.open}>
          <div className="ingredient-dropdown">
            <Well>
              <ul className="list-group">
                {this.props.data.ingredients.map((ingredient, index) => this.renderIngredients(ingredient, index))}
              </ul>
              <button className="btn btn-danger" onClick={() => this.props.deleteRecipe(this.props.data.name, this.props.data.ingredients)}>Delete</button>
              <button className="btn btn-info">Edit</button>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  };
}

export default connect (null, { deleteRecipe })(Recipe);
