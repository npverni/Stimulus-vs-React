import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Clipboard from './components/Clipboard';
import Slideshow from './components/Slideshow';

class App extends Component {
  render() {
    return (
      <div>
        <Greet />
        <Clipboard />
        <Slideshow />
      </div>
    );
  }
}

export default App;
