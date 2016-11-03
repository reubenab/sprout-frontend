import * as types from './actionTypes';

export function addText(text = '') {
  return {
    type: types.DOCUMENT_ADD_TEXT,
    text
  };
};
