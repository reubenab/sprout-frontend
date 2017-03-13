import React, { Component } from 'react';

import styles from './document.scss';

import { DocumentInput } from '../document-input/'

export class TableViewCell extends Component {
  render() {
    const { doc } = this.props;
    var { name, id } = doc;

    return (
      <li>{name}</li>;
    );
  }
}
