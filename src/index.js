import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
