import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <tr>
        <td><a onClick={() => this.setState({ open: !this.state.open })}>{this.props.data.name}</a></td>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <td>Test</td>
            </Well>
          </div>
        </Collapse>
      </tr>
    )
  };
}

export default Recipe;
// should render list of ingredients within table
