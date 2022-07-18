import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

//COMPONENTES 
import Login from './components/Login';
import { Actuales } from './components/Actuales';
import { Historial } from './components/Historial';
import { Menu } from './components/Menu'

import './components/css.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="menu/Actuales" element={<Actuales />} />
      <Route path="menu/Historial" element={<Historial />} />
      <Route path='Menu' element={<Menu/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
