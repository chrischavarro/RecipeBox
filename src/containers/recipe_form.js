import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import Modal from 'react-modal';

class RecipeForm extends Component {
  constructor(props){
    super(props)

    this.state = { recipeName: '',
                   recipeIngredients: '',
                   modalOpen: false
                 };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // console.log(Object(localStorage));
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
    this.props.getRecipes(this.state.recipeName, this.state.recipeIngredients);
    this.setState({ recipeName: '', recipeIngredients:'' });
    this.closeModal();
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Add Recipe</button>
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
              <button className="btn btn-primary">Add Recipe</button>
              <button className="btn btn-danger">Cancel</button>
            </form>
        </Modal>
      </div>
    )
  };
}

export default connect (null, { getRecipes })(RecipeForm);
