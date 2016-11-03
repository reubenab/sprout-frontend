import * as types from './actionTypes';

const initialState = '';

export default function(state = initialState, action) {
  switch (action.type) {
    case types.DOCUMENT_ADD_TEXT:
      return state + action.text;

    default:
      return state;
  }
}
