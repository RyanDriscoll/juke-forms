import React, { Component } from 'react';

import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const artists = this.props.artists;
    const inputValue = this.state.inputValue;
    const filteredArtists = artists.filter(artist => artist.name.toLowerCase().startsWith(inputValue.toLowerCase()));
    return (
      <div>
        <FilterInput handleInputChange={this.handleInputChange}/>
        <Artists artists={filteredArtists}/>
      </div>
    )
  }
}

export default FilterableArtistsContainer;