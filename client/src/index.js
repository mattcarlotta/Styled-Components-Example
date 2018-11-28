import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/globals/globals.scss';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
