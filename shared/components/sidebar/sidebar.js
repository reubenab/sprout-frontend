import React, { Component } from 'react';

import styles from './sidebar.scss';

import { TableViewCell } from '../table-view-cell/'

export class Sidebar extends Component {
  render() {
    // documents - list of  (id, name) tuples associated with logged in user
    const { documents } = this.props;

    return (
      <div className={ styles.default }>
        <ul>
          {documents.map(doc => <TableViewCell key={doc.id} doc={doc} />)}
        </ul>
      </div>
    );
  }
}
