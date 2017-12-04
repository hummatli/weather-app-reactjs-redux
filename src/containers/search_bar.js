import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input />
        <span className="imput-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
