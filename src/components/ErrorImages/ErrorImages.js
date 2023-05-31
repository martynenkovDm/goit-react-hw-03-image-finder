import { Text, Wrapper } from './ErrorImages.styled';
import PropTypes from 'prop-types';

export default function ImageErrorView({ message }) {
  return (
    <Wrapper role="alert">
      <Text>{message}</Text>
    </Wrapper>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string,
};
