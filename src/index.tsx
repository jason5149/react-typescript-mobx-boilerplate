import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@styles/index';
import App from './App';

const init: VoidFunction = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

init();
