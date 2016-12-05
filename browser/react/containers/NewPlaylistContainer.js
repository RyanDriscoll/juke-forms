import React, { Component } from 'react';

import NewPlaylist from '../components/NewPlaylist';


class NewPlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      inputValue: event.target.value
    }, this.validateForm);
  }

  validateForm() {
    const inputLength = this.state.inputValue.length;
    const button = document.getElementById("playlist-submit");
    if (inputLength > 0 && inputLength < 16) button.disabled = false;
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("input value", this.state.inputValue);
    this.setState({ inputValue: '' })
  }

  render() {
    return (
      <div>
        <NewPlaylist handleInput={this.handleInput}
            onSubmit={this.onSubmit}
            inputValue={this.state.inputValue} />
      </div>
    )
  }
}

export default NewPlaylistContainer;