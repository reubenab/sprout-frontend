import React, { Component } from 'react';

import styles from './document.scss';

import { DocumentInput } from '../document-input/'

export class Document extends Component {
  render() {
    const { text, onAddText } = this.props;

    return (
      <div className={ styles.default }>
        <DocumentInput onAddText={onAddText} text={text} />
        <p>{ text }</p>
      </div>
    );
  }
}
