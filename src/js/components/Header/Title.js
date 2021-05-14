import PropTypes from 'prop-types';
import React from 'react';

export default class Title extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

Title.propTypes = {
  title: PropTypes.string,
};
