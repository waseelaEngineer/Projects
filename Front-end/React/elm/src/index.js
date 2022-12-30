import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './Pages/App/App';
import UserContextProvidor from './Contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <UserContextProvidor>
      <App />
    </UserContextProvidor> 
  </HashRouter>
);