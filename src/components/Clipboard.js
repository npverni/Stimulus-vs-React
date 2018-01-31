import React, { Component } from 'react';

class Clipboard extends Component {
  constructor() {
    super();
    this.copy = this.copy.bind(this);
  }

  copy() {
    this.source.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div>
        <h1>React Clipboard</h1>
        <div>
          PIN: <input type="text" value="1234" readOnly ref={(input) => this.source = input} />
          <button onClick={this.copy}>Copy to Clipboard</button>
        </div>
      </div>
    );
  }

}

export default Clipboard;

