import * as types from './actionTypes';
import request from 'superagent';

export function addText(text = '') {
  return {
    type: types.DOCUMENT_ADD_TEXT,
    text
  };
};

export function sendDiffs(diffs) {
  return {
    type: types.DOCUMENT_RECEIVE_DIFFS_LOADING
  }
}

export function newDiff(prevText, newText) {
  return {
    type: types.DOCUMENT_NEW_DIFF,
    prevText,
    newText
  }
}

export function receiveDiffsError(error) {
  return {
    type: types.DOCUMENT_RECEIVE_DIFFS_ERROR,
    error
  }
}

export function receiveDiffsSuccess(diffs) {
  return {
    type: types.DOCUMENT_RECEIVE_DIFFS_SUCCESS,
    diffs: diffs
  }
}

export function fetchDiffs(diffs) {
  let diffMap = new Map;
  var diffList = [];
  for (var diff in diffs) {
    var diffObj = {op: diffs[diff][0], text: diffs[diff][1]};
    diffList.push(diffObj);
  }
  var diffJson = JSON.stringify(diffList);
  return dispatch => {
    dispatch(sendDiffs());
    return request
      .post('http://localhost:9000/api/edit')
      .set('Content-Type', 'application/json')
      .send({
        author: 'jtcho',
        applicationId: 'Plank',
        documentId: 'pineapple',
        diffs: diffJson
      })
      .then(response => dispatch(receiveDiffsSuccess(response.json())))
      .catch(err => dispatch(receiveDiffsError(err)));
  };
}
