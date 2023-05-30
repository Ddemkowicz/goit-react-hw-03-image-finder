import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
