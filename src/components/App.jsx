import React, { Component } from 'react';
import getImages from 'services/getImageFromApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import { LoadButton } from './LoadButton/LoadButton';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ErrorImages from 'components/ErrorImages/ErrorImages';
import { notifyOptions } from 'notify/notify';
import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    images: [],
    status: Status.IDLE,
    valueInput: '',
    error: '',
    page: 1,
    totalPages: 0,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      this.setState({ status: Status.PENDING });
      this.setState({ images: [] });
      this.handleFetch();
    } else if (prevState.page !== this.state.page) {
      this.setState({ status: Status.PENDING });
      setTimeout(() => this.handleFetch(), 1000);
    }
  }

  async handleFetch() {
    try {
      const { inputValue, page } = this.state;
      const images = await getImages(inputValue, page);
      console.log(images);

      if (images.total !== 0) {
        this.setState(prevState => ({
          images:
            page === 1 ? images.hits : [...prevState.images, ...images.hits],
          totalPages: Math.ceil(images.total / 12),
          status: Status.RESOLVED,
        }));
      } else {
        this.setState({ status: Status.REJECTED });
        toast.info('No images found', notifyOptions);
      }
    } catch (myError) {
      this.setState({ error: myError, status: Status.REJECTED });
      toast.info(myError, notifyOptions);
    }
  }

  getInputValue = inputValue => {
    this.setState({ inputValue: inputValue, page: 1 });
  };

  handleOnSubmit = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  setModalImg = url => {
    this.setState({ modalImage: url, showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      images,
      status,
      valueInput,
      error,
      page,
      totalPages,
      showModal,
      modalImage,
    } = this.state;

    return (
      <>
        <SearchBar
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={valueInput}
          getInputValue={this.getInputValue}
          onSubmit={this.handleOnSubmit}
        />
        <ImageGallery images={images} toggleModal={this.setModalImg} />
        {images.length > 0 && status !== 'pending' && page < totalPages && (
          <LoadButton onLoadMore={this.handleLoadMore} />
        )}
        {status === 'pending' && <Loader />}
        {showModal && (
          <Modal url={modalImage} onClose={this.handleModalClose} />
        )}
        {status === 'rejected' && <ErrorImages message={error} />}
      </>
    );
  }
}
