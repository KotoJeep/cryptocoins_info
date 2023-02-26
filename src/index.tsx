import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { Loader, LoaderSize } from './components/Loader/Loader';
import { WithLoader } from './components/WithLoader/WithLoader';
import { Card } from './components/Card/Card';
import { Input } from './components/Input/Input';
import { CheckBox } from './components/CheckBox/CheckBox';
import {
  MultiDropdown,
  Option,
} from './components/MultiDropdown/MultiDropdown';

const defaultPluralizeOptions = (elements: Option[]) =>
  elements.map((el: Option) => el.value).join();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div
      style={{
        width: '200px',
        height: '100px',
        padding: '14px',
        border: '1px solid red',
        margin: '200px',
        fontSize: '16px',
      }}
    >
      <WithLoader loading={true}>Page content</WithLoader>
    </div>
  </React.StrictMode>
);

// Page content
// style={{width:'400px', height:'200px', border: '1px solid red'}}
// <Input placeholder={'text'} disabled={false} value={'text'} onChange={()=>console.log('click!')}/>
