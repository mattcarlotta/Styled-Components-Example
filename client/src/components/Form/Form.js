import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ city, country, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h1 className="title">Example</h1>
    <input
      type="text"
      name="city"
      placeholder="City..."
      onChange={handleChange}
      value={city}
    />
    <input
      type="text"
      name="country"
      placeholder="Country..."
      onChange={handleChange}
      value={country}
    />
    <button type="submit">Submit</button>
  </form>
);

Form.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
