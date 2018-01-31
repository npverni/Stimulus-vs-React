import React, { Component } from 'react';

class Greet extends Component {
  constructor() {
    super();
    this.greet = this.greet.bind(this);
  }

  greet() {
    console.log(this.name.value);
  }

  render() {
    return (
      <div>
        <h1>React Greet</h1>
        <input type="text" ref={(input) => { this.name = input }} />
        <button onClick={this.greet}>Greet</button>
      </div>
    );
  }

}

export default Greet;

