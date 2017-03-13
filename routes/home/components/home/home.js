import React, { Component } from 'react';

import { Header } from 'components/header';
import { Wrapper } from 'components/wrapper';
import { Document } from 'components/document';

export class Home extends Component {

  // from home/containers/home.js - mapStateToProps() and mapDispatchToProps()
  render() {
    const {
      docText,
      onAddText
    } = this.props;

    var docId = this.props.location.query.docId
    var userId = this.props.location.query.userId

    return (
      <div>
        <Header />

        <Wrapper title='Sidebar'>
        </Wrapper>

        <Wrapper title='Document'>
          <p> This is a Sprout document. </p>
          <Document text={docText} onAddText={onAddText} docId={docId} userId={userId} />
        </Wrapper>

      </div>
    );
  }
}
