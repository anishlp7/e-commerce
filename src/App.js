import React from 'react';
import Homepage from './pages/homepage/homepage'
import './App.css';
import { Switch,Route } from 'react-router-dom';
import ShopPage from './pages/shop-pages/shop';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
