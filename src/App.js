import React from 'react';
import Counter from './conponents/Counter/Counter';
import Dropdown from 'conponents/Dropdown/Dropdown';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d88' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5' },
];

const App = () => (
  <>
    <h1>Стан компонента</h1>

    <Dropdown />
    {/* <Counter initialValue={10} /> */}
  </>
);

export default App;
