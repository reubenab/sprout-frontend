import React, { Component } from 'react';

import styles from './table-view-cell.scss';

import { DocumentInput } from '../document-input/'

export class TableViewCell extends Component {
  render() {
    const { doc } = this.props;

    return (
      <div className={styles.sidebarLink}>{doc.name}</div>
    );
  }
}
