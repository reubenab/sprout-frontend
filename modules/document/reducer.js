import { combineReducers } from 'redux';
import {diff_match_patch} from 'diff-match-patch';

import * as types from './actionTypes';

const initialState = '';

export default function(state = {
  isLoading: false,
  text: '',
  error: null
}, action) {
  switch (action.type) {
    case types.DOCUMENT_ADD_TEXT:
      var oldText = state.text;
      return { ...state,
        text: oldText + action.text
      };

    case types.DOCUMENT_NEW_DIFF:
      let diffs = diff_match_patch.prototype.diff_main(action.prevText, action.newText);
      // check a new diff exists or it isn't a diff with the exact existing text
      if (diffs.length > 0 && (diffs.length !== 1 || diffs[0][0] !== 0)) {
        console.log("Diffs: ");
        console.log(diffs);
        // format diffs and send to server via AJAX call
        return { ...state,
          text: action.newText
        };
      } else {
        return state;
      }

    case types.DOCUMENT_RECEIVE_DIFFS_LOADING:
      return { ...state,
        isLoading: true,
        error: null
      };

    case types.DOCUMENT_RECEIVE_DIFFS_ERROR:
      return { ...state,
        isLoading: false,
        error: action.error
      }

    case types.DOCUMENT_RECEIVE_DIFFS_SUCCESS:
      var receivedDiffs = JSON.parse(action.diffs);
      var diffOutput = []
      for (d in receivedDiffs) {
        var slice = receivedDiffs[d];
        diffOutput.push([slice.op, slice.text]);
      }
      // patch_make(originalText, diffOutput) then patch_apply(result, originalText)
      let patches = diff_match_patch.prototype.patch_make(state.text, diffOutput);
      let newTextArr = diff_match_patch.prototype.patch_apply(patches, state.text);
      return { ...state,
        isLoading: false,
        text: newTextArr[0]
      }


    default:
      return state;
  }
}
