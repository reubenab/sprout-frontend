import { connect } from 'react-redux';

import { increment, decrement } from 'modules/counter/actions';
import { setAmount, setCurrency, fetchRatesIfNeeded } from 'modules/currency/actions';
import { addText } from 'modules/document/actions';

import { Home } from '../components/home';

const mapStateToProps = (state) => {
  // initial state is set in sprout-frontend/index.js
  return {
    counter: state.counter,
    currency: state.currency,
    docText: state.doc
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchRatesIfNeeded(['GBP', 'USD', 'EUR']));

  return {
    onIncrementCounter: () => { dispatch(increment()) },
    onDecrementCounter: () => { dispatch(decrement()) },
    onChangeConverterAmount: (amount) => { dispatch(setAmount(amount)) },
    onChangeConverterCurrency: (currency) => { dispatch(setCurrency(currency)) },
    onAddText: (text) => { dispatch(addText(text))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
