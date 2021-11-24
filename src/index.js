import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppContext} from './components/context/Context';
ReactDOM.render(
  <StrictMode>
    <AppContext>
    <App />
    </AppContext>
  </StrictMode>,
  document.getElementById('root')
);
