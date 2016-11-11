import React, { Component } from 'react';

import styles from './document-input.scss';

import {diff_match_patch} from 'diff-match-patch';
import request from 'superagent';

export class DocumentInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      cachedText: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkDiffs();
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var {onAddText} = this.props;
    var text = this.state.text;
    if (!text) {
      return;
    }
    onAddText(text);
    this.setState({text: ''});
  }

  checkDiffs() {
    setInterval(() => {
      let diffs = diff_match_patch.prototype.diff_main(this.state.cachedText, this.state.text);
      if (diffs.length > 0 && (diffs.length != 1 || diffs[0][0] != 0)) {
        console.log("Diffs: ");
        console.log(diffs);
        var dpm = new diff_match_patch();
        var patches = dpm.patch_make(this.state.cachedText, diffs);
        var newTextArr = dpm.patch_apply(patches, this.state.cachedText);
        var newText = newTextArr[0];
        console.log(newText);
        this.setState({
          text: newText,
          cachedText: newText
        });
        this.sendDiffs(diffs);
      }
    }, 500);
  }

  sendDiffs(diffs) {
    let diffMap = new Map;
    var diffList = [];
    for (var diff in diffs) {
      var diffObj = {op: diffs[diff][0], text: diffs[diff][1]};
      diffList.push(diffObj);
    }
    // var diffJson = JSON.stringify(diffList);
    // debugger;
    // console.log('diffJson');
    // console.log(diffJson);
    request
      .post('http://localhost:9000/api/edit')
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .send({
        author: 'jtcho',
        applicationId: 'Plank',
        documentId: 'pineapple',
        diffs: diffList
      })
      .then(response => this.fetchDiffs())
      .catch(error => console.log(error))
  }

  fetchDiffs() {
    request
      .get('http://localhost:9000/api/fetch/pineapple/jtcho')
      .then(response => this.receivedDiffs(response.body))
      .catch(error => console.log(error))
  }

  receivedDiffs(diffs) {
    console.log(diffs);
    var diffOutput = []
    // format diffs appropriately
    for (d in diffs) {
      var slice = diffs[d];
      diffOutput.push([slice.op, slice.text]);
    }
    // patch_make(originalText, diffOutput) then patch_apply(result, originalText)
    var dpm = new diff_match_patch();
    var patches = dpm.patch_make(this.state.text, diffOutput);
    var newTextArr = dpm.patch_apply(patches, this.state.text);
    var newText = newTextArr[0];
    console.log('newText: ' + newText);
    this.setState({
      text: newText,
      cachedText: this.state.text
    })
  }

  render() {
    var {text} = this.props;
    return (
      <div className={ styles.default }>
        <section>
          <textarea
            type='text'
            className='text-pad'
            onChange={this.handleTextChange}
            value={this.state.text}
          />
        </section>
      </div>
    );
  }
}
