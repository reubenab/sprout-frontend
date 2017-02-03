import { connect } from 'react-redux';

import { addText } from 'modules/document/actions';

import { Home } from '../components/home';

const mapStateToProps = (state) => {
  // initial state is set in sprout-frontend/index.js
  return {
    docText: state.doc
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    onAddText: (text) => { dispatch(addText(text))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
