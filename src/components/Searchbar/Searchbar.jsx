import React, { Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { notifyOptions } from 'notify/notify';
import { toast } from 'react-toastify';
class Searchbar extends Component {
  state = {
    value: '',
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ value: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.info('Please enter key words for search', notifyOptions);
    }
    this.props.getInputValue(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Button type="submit" className="button">
            <HiMagnifyingGlass size="24" padding="10px" />
          </Button>
          <Input
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.onInputChange}
          />
        </Form>
      </Header>
    );
  }
  static propTypes = {
    getInputValue: PropTypes.func.isRequired,
  };
}

export default Searchbar;
