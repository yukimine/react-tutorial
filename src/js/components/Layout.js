import React from 'react';
import Header from './Header';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = 'Tsutomu';
  }

  render() {
    return (
      <div>
        <Header />
        <Header />
        <Header />
      </div>
    );
  }
}
