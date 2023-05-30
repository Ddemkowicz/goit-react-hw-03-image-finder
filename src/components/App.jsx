import Searchbar from './Searchbar';
import '../styles.css';
import { Component } from 'react';

export class App extends Component {
  // state = {
  //   URL: 'https://pixabay.com/api/',
  //   API_KEY: '35091080-36e54d1ab1b489bab378e0aed',
  //   query: '',
  //   page: 1,
  //   totalResults: 0,
  //   images: [],
  //   error: false,
  //   message: '',
  // };
  // // Handle form submit
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.setState({
  //     error: false,
  //     message: '',
  //   });
  //   if (this.state.query.length > 0) {
  //     this.getImages(this.state.query, this.state.page);
  //   } else {
  //     this.setState({
  //       error: true,
  //       message: 'Please enter a search query',
  //     });
  //   }
  // };
  // // Handle form input
  // handleInput = e => {
  //   this.setState({
  //     query: e.target.value,
  //   });
  // };
  // // Handle form pagination
  // handlePage = e => {
  //   e.preventDefault();
  //   this.setState({
  //     page: e.target.value,
  //   });
  // };

  render() {
    return (
      <div
        className="App"
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101',
        // }}
      >
        <Searchbar />
      </div>
    );
  }
}
