import React, { Component } from 'react';
// var Modal = require('react-bootstrap-modal')
var Modal = require('react-bootstrap-modal');
// import "/lib/styles/rbm-patch.css";


class ModalExample extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false}
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true});
  }

  closeModal() {
    this.setState({ open: false});
  }

  render() {

    return (
      <div>
        <button type='button' onClick={this.openModal}>Launch modal</button>

        <Modal
          show={this.state.open}
          onHide={this.closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Some Content here</p>
          </Modal.Body>
          <Modal.Footer>
            // If you don't have anything fancy to do you can use
            // the convenient `Dismiss` component, it will
            // trigger `onHide` when clicked
            <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>

            // Or you can create your own dismiss buttons
            <button className='btn btn-primary' >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalExample;
