import React, { Component } from 'react';
import '../styles.css';
import { api } from 'api/api';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: '',
      isLoading: false,
      error: null,
    };
  }
  onInputChange = event => {
    this.setState({ query: event.target.value });
  };
  onFormSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      const images = await api.fetchImagesWithQuery(this.state.query);
      this.setState({ images });
      console.log(images);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
      event.target.reset();
    }
  };

  // buttonClick = async () => {
  //   const bbb = this.state.query;

  //   this.setState({ isLoading: true });
  //   try {
  //     const images = await api.fetchImagesWithQuery(this.state.query);
  //     this.setState({ images });
  //     console.log(images);

  //     console.log(bbb);
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   try {
  //     const images = await api.fetchImagesWithQuery(this.state.query);
  //     this.setState({ images });
  //     console.log(images);
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form onSubmit={this.onFormSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              onChange={this.onInputChange}
              className="SearchForm-input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
