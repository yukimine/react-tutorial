import PropTypes from 'prop-types';
import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Title title={this.props.title} />
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};
