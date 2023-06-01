import React, { Component } from 'react';

export default class Button extends Component {
  przewinDoElementu = () => {
    const element = document.getElementById('idElementu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { onLoadMore } = this.props;
    return (
      <div className="container">
        <button id="2137" onClick={onLoadMore} className="Button">
          Load more
        </button>
      </div>
    );
  }
}