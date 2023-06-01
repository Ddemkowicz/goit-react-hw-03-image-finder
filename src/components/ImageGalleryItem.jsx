import React, { Component } from 'react';
import '../styles.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { image, openModal } = this.props;
    return (
      <li id={image.id} className="ImageGalleryItem">
        <img
          onClick={openModal}
          className="ImageGalleryItem-image"
          src={image.webformatURL}
          alt={image.tags}
          data-src={image.largeImageURL}
          loading="lazy"
        />
      </li>
    );
  }
}
