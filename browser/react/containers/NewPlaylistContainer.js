import React, { Component } from 'react';
import axios from 'axios';

import NewPlaylist from '../components/NewPlaylist';


class NewPlaylistContainer extends Component {
  constructor(props) {
    super(props);
    console.log("newplaylistcontainer constructor props", props);
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
    const input = document.getElementById("playlist-input");
    const warning = document.getElementById("alert-warning");
    if (inputLength > 0 && inputLength < 16) {
      warning.hidden = true;
      button.disabled = false;
      input.dataset.touched = true;
    }
    if(inputLength === 0 && input.dataset.touched === "true" || inputLength >=16){
      warning.hidden = false;
    }

  }

  onSubmit(event) {
    event.preventDefault();
    this.props.createPlaylist(this.state.inputValue);
    this.setState({ inputValue: '' })
  }



  render() {
    return (
      <div>
        <NewPlaylist handleInput={this.handleInput}
            onSubmit={this.onSubmit}
            inputValue={this.state.inputValue}
            createPlaylist = {this.createPlaylist}/>
      </div>
    )
  }
}

export default NewPlaylistContainer;