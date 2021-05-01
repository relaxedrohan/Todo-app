import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

const DATA = [
  {name:"Eat", completed:true, id:"todo-0"},
  {name:"Sleep", completed:false, id:"todo-1"},
  {name:"repeat", completed:false, id:"todo-2"}
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
