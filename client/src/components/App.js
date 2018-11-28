import React, { Component } from 'react';
import Container from './Container/Container';
import Form from './Form/Form';
import '../styles';

export default class App extends Component {
  state = {
    city: '',
    country: '',
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const { city, country } = this.state;

    if (!city || !country) return null;

    /* eslint-disable-next-line no-alert */
    alert(`City: ${city} \nCountry: ${country}`);

    this.setState({ city: '', country: '' });
  };

  onHandleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render = () => (
    <Container>
      <Form
        {...this.state}
        handleSubmit={this.onHandleSubmit}
        handleChange={this.onHandleChange}
      />
    </Container>
  );
}
