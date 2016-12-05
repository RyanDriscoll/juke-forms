import React from 'react';

const NewPlaylist = (props) => {
  return (
    <form onSubmit={props.onSubmit} id="new-playlist-form" className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter playlist name"
        onChange={props.handleInput}
        value={props.inputValue}
      />
      <button id="playlist-submit" disabled="true" type="submit" form="new-playlist-form" value="Submit" className="btn btn-primary btn-block">
        <span className="glyphicon glyphicon-plus"></span> SUBMIT
      </button>
      <div id="alert-warning" hidden="true" className="alert alert-warning">Please enter a name</div>
    </form>
  )
}

export default NewPlaylist;