import React, { Component } from 'react';

import styles from './document-input.scss';

export class DocumentInput extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {

    return (
      <div className={ styles.default }>
        <form className="doc-input" onSubmit={this.handleSubmit} >
          <input
            type="text"
            placeholder="Add text here"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Add Text" />
        </form>
      </div>
    );
  }
}
