import React, { Component } from 'react';
import { Collapse, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteRecipe, editRecipe } from '../actions';
import Modal from 'react-modal';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = { recipeName: this.props.data.name,
                   recipeIngredients: this.props.data.ingredients,
                   modalOpen: false
                 };
    this.renderIngredients = this.renderIngredients.bind(this);
    // this.editRecipe = this.editRecipe.bind(this);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true});
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('Recieved submit')
    this.props.editRecipe(this.props.data.name, this.props.data.ingredients, this.props.index)
    // this.props.getRecipes(this.state.recipeName, this.state.recipeIngredients);
    // this.setState({ recipeName: '', recipeIngredients:'' });
    // this.closeModal();
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
                <button className="btn btn-danger" onClick={() => this.props.deleteRecipe(this.props.index)}>Delete</button>
                <button className="btn btn-info" onClick={this.openModal}>Edit</button>
              </Well>
            </div>
          </Collapse>

          <div className="col-sm-4 col-sm-offset-4">
            <Modal
              isOpen={this.state.modalOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Add a Recipe"
              className="recipe-modal"
              overlayClassName="recipe-modal"
              >
                <form
                  onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Recipe</label>
                    <input
                      type="text"
                      name="recipeName"
                      placeholder="Recipe name"
                      className="form-control"
                      value={this.state.recipeName}
                      onChange={this.onInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Ingredients</label>
                    <input
                      type="text"
                      name="recipeIngredients"
                      placeholder="Enter your ingredients, separated by commas"
                      className="form-control"
                      value={this.state.recipeIngredients}
                      onChange={this.onInputChange}
                    />
                  </div>
                  <button className="btn btn-primary">Save Changes</button>
                  <button className="btn btn-danger" onClick={this.closeModal}>Cancel</button>
                </form>
            </Modal>
          </div>

      </div>
    )
  };
}

export default connect (null, { deleteRecipe, editRecipe })(Recipe);
