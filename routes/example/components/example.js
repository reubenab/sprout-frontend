import React, { Component } from 'react';

import { Header } from 'components/header';
import { Wrapper } from 'components/wrapper';
import { Counter } from 'components/counter';
import { Document } from 'components/document';

export class Example extends Component {
  render() {
    const {
      counter,
      onIncrementCounter,
      onDecrementCounter,
      docText,
      onAddText
    } = this.props;

    return (
      <div>
        <Header />

        <Wrapper title='Another counter'>
          <p>
            This instance of the counter uses the same state as the instance on
            the home page. We don't need to track it separately and it
            automatically syncs.
          </p>
          <Counter
            count={ counter }
            onIncrement={ onIncrementCounter }
            onDecrement={ onDecrementCounter }
          />
        </Wrapper>

        <Wrapper title='Another instance of the document'>
          <p>This instance of the document uses the same state as the one on the
          home page, just like the counter.</p>
          <Document text={docText} onAddText= {onAddText} />
        </Wrapper>
      </div>
    );
  }
}
