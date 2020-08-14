import React from 'react';
import {Route, BrowserRouter, Link} from "react-router-dom";
import './App.css';
import Order from './Order';
import AddProduct from './AddProdut';
import Store from './Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app_header">
          <Link to='/'>商城</Link>
          <Link to='/order'>订单</Link>
          <Link to='/add'>添加商品</Link>
        </div>
          <Route exact path='/order' component={Order}/>
          <Route exact path='/add' component={AddProduct}/>
          <Route exact path='/' component={Store}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
