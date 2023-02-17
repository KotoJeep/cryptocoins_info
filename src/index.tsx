import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import {Loader} from "./components/Loader/Loader";
import {WithLoader} from "./components/WithLoader/WithLoader";
import {Button} from "./components/Button/Button";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div style={{margin: '40px'}}>
            <Button>Cansel</Button>
        </div>
    </React.StrictMode>
);
