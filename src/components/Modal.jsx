import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img
            src="https://cdn.pixabay.com/photo/2023/05/21/11/54/deer-8008410_1280.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}
