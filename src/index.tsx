import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import {Loader} from "./components/Loader/Loader";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
        <Loader/>
    </div>
  </React.StrictMode>
);
