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

    return (
      <div>
        <Header />

        <Wrapper title='Document'>
          <p> This document represents all the text that a user has added.</p>
          <Document text={docText} onAddText= {onAddText} />
        </Wrapper>

      </div>
    );
  }
}
