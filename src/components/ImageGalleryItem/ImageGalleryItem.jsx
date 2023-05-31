import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, tags, toggleModal }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={url}
        alt={tags}
        onClick={() => {
          toggleModal(url);
        }}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
