import { LoaderContainer } from './Loader.styled';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin color='#3f51b5' height={80} width={80} ariaLabel='loading' />
    </LoaderContainer>
  );
};

export default Loader;