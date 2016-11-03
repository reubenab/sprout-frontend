import { connect } from 'react-redux';

import { increment, decrement } from 'modules/counter/actions';
import { addText } from 'modules/document/actions';

import { Example } from '../components/example';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    docText: state.doc
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => { dispatch(increment()) },
    onDecrementCounter: () => { dispatch(decrement()) },
    onAddText: (text) => { dispatch(addText(text)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
