import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidUpdate() {
    const { isModalOpen, closeModal } = this.props;

    isModalOpen
      ? window.addEventListener('keydown', closeModal)
      : window.removeEventListener('keydown', closeModal);
  }

  render() {
    const { closeModal, largeImageURL, tags, isModalOpen } = this.props;

    return (
      <div
        onClick={closeModal}
        className={`Overlay ${isModalOpen ? '' : 'modalNone'}`}
      >
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
