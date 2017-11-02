import React, { Component } from 'react';
import { Collapse, Well } from 'react-bootstrap';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.renderIngredients = this.renderIngredients.bind(this);
  }
  renderIngredients(ingredient, index) {
    return (
      <li key={index}>
      {ingredient}
      </li>
    )
  }
  render() {
    return (
      <div className="col-sm-10 recipe">
        <div><a onClick={() => this.setState({ open: !this.state.open })}>{this.props.data.name}</a></div>
        <Collapse in={this.state.open}>
          <div className="ingredient-dropdown">
            <Well>
              <ul>
                {this.props.data.ingredients.map((ingredient, index) => this.renderIngredients(ingredient, index))}
              </ul>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  };
}

export default Recipe;
