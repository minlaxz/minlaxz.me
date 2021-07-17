import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css/dist/css/materialize.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


