import React, { Component } from 'react';

import styles from './main-panel.scss';

export class MainPanel extends Component {
  render() {
    var {isSidebar, title, children} = this.props;
    var panel = isSidebar ? (
      <div className={styles.sidebar}>
        <div className={styles.header}>{title}</div>
        {children}
      </div>
      ) : (
      <div>
        <div className={styles.header}>{title}</div>
        {children}
      </div>
      );
    return panel;
  }
}
