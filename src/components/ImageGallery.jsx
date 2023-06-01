import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;

    return (
      <>
        <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem openModal={openModal} image={image} />
          ))}
        </ul>
      </>
    );
  }
}
