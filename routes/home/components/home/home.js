import React, { Component } from 'react';

import { Header } from 'components/header';
import { Wrapper } from 'components/wrapper';
import { Counter } from 'components/counter';
import { Currency } from 'components/currency';
import { Document } from 'components/document';

export class Home extends Component {

  // from home/containers/home.js - mapStateToProps() and mapDispatchToProps()
  render() {
    const {
      counter,
      currency,
      docText,
      onIncrementCounter,
      onDecrementCounter,
      onChangeConverterAmount,
      onChangeConverterCurrency,
      onAddText
    } = this.props;

    const counterElement = (
      <Counter
        count={ counter }
        onIncrement={ onIncrementCounter }
        onDecrement={ onDecrementCounter }
      />
    );

    return (
      <div>
        <Header />

        <Wrapper title='Counter'>
          <p>This counter demonstrates basic redux principles.</p>
          { counterElement }
        </Wrapper>


        <Wrapper title='Document'>
          <p> This document represents all the text that a user has added.</p>
          <Document text={docText} onAddText= {onAddText} />
        </Wrapper>

        <Wrapper title='Currency'>
          <p>
            This currency converter demonstrates how to use asynchronous api
            calls to update your redux store.
          </p>
          <Currency
            state={ currency }
            onChangeAmount={ onChangeConverterAmount }
            onChangeCurrency={ onChangeConverterCurrency }
          />
        </Wrapper>

        <Wrapper title='Reused counter'>
          <p>This second instance of the counter uses the same state.</p>
          { counterElement }
        </Wrapper>
      </div>
    );
  }
}
