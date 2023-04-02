import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Seedling from './components/Seedling';
import CartItem from './components/CartItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/seedling">
      <Seedling />
    </Route>
    <Route path="/cartItem">
      <CartItem />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);