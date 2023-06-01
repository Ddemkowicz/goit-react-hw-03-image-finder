import React, { Component } from 'react';
import '../styles.css';

export default class Searchbar extends Component {
  componentDidMount() {}

  render() {
    const { onFormSubmit, onInputChange } = this.props;

    return (
      <div>
        <header className="Searchbar">
          <form onSubmit={onFormSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="lupa">🔍</span>
            </button>

            <input
              onChange={onInputChange}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
