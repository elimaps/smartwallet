import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
