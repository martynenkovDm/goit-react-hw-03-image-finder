import { GalleryImage } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <>
      <GalleryImage>
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            url={largeImageURL}
            tags={tags}
            toggleModal={toggleModal}
          />
        ))}
      </GalleryImage>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
