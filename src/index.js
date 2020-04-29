import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import MetaTags from 'react-meta-tags';

ReactDOM.render(
  <React.Suspense>
    <MetaTags>
      <title>Naga Vignesh - Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    </MetaTags>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
