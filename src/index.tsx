import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import {Loader, LoaderSize} from "./components/Loader/Loader";
import {WithLoader} from "./components/WithLoader/WithLoader";
import {Card} from "./components/Card/Card";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div style={{margin:'200px'}}>
        </div>
    </React.StrictMode>
);

// Page content
// style={{width:'400px', height:'200px', border: '1px solid red'}}
