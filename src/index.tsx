import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import {Loader} from "./components/Loader/Loader";
import {WithLoader} from "./components/WithLoader/WithLoader";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
        <WithLoader loading={true}>
            <div style={{height:'200px', backgroundColor: 'gray' }}>Семантическая верстка наше все!</div>
        </WithLoader>
    </div>
  </React.StrictMode>
);
