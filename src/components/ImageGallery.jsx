import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
