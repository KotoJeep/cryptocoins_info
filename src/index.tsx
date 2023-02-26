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
    <div style={{ margin: '200px' }}>
      <MultiDropdown
        options={[
          { key: 'msk', value: 'Москва' },
          { key: 'spb', value: 'Санкт-Петербург' },
          { key: 'ekb', value: 'Екатеринбург' },
        ]}
        value={[{ key: 'msk', value: 'Москва' }]}
        onChange={(value: Option[]) => console.log('Выбрано:', value)}
        pluralizeOptions={defaultPluralizeOptions}
        disabled
      />
    </div>
  </React.StrictMode>
);

// Page content
// style={{width:'400px', height:'200px', border: '1px solid red'}}
// <Input placeholder={'text'} disabled={false} value={'text'} onChange={()=>console.log('click!')}/>
