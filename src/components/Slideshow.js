import React, { Component } from 'react';

class Slideshow extends Component {
  constructor() {
    super();
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.activeClass = this.activeClass.bind(this);
    this.state = { counter: 1 };
  }

  prev() {
    this.setState({ counter: this.state.counter - 1 });
  }

  next() {
    this.setState({ counter: this.state.counter + 1 });
  }

  activeClass(i) {
    return this.state.counter === i ? 'slide--current' : 'slide';
  }

  render() {
    return (
      <div>
        <h1>React Slideshow</h1>
        <button onClick={this.prev}>←</button>
        <button onClick={this.next}>→</button>

        <div className={this.activeClass(1)}>🐵</div>
        <div className={this.activeClass(2)}>🙈</div>
        <div className={this.activeClass(3)}>🙉</div>
        <div className={this.activeClass(4)}>🙊</div>
      </div>
    );
  }

}

export default Slideshow;

