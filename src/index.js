import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DrawerLeft from './Components/Zara Mens/Drawer';
import SearchApp from './Components/Zara Mens/Search';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <App />

  </BrowserRouter>
);


 
