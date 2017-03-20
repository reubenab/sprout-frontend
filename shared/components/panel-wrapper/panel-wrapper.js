import React, { Component } from 'react';

import styles from './panel-wrapper.scss';

export class PanelWrapper extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div id='sidebar'>
        <Sidebar documents={documents} />
      </div>

      <Wrapper title='Document'>
        <p> This is a Sprout document. </p>
        <Document text={docText} onAddText={onAddText} docId={docId} userId={userId} />
      </Wrapper>
    );
  }
}
