import { LoadMoreBtn, LoadMoreContainer } from './LoadButton.styled';
import PropTypes from 'prop-types';

export const LoadButton = ({ onLoadMore }) => {
  return (
    <LoadMoreContainer>
      <LoadMoreBtn type="button" onClick={onLoadMore}>
        Load more
      </LoadMoreBtn>
    </LoadMoreContainer>
  );
};

LoadButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
