import React, { Component } from 'react';

import styles from './sidebar-content.scss';

import { MainPanel } from '../main-panel';
import { TableViewCell } from '../table-view-cell/';

export class SidebarContent extends Component {
  render() {
    // documents - list of  (id, name) tuples associated with logged in user
    const { documents } = this.props;

    // <div className={ styles.default }>
    //     <ul>
    //       {documents.map(doc => <TableViewCell key={doc.id} doc={doc} />)}
    //     </ul>
    //   </div>

    return (
      <MainPanel title='Your Sprouts' isSidebar={true}>
        <div className={styles.content}>
          {documents.map(doc => <TableViewCell key={doc.id} doc={doc} />)}
        </div>
      </MainPanel>
    );
  }
}
