import React from 'react';
import Homepage from './pages/homepage/homepage'
import './App.css';
import { Switch,Route } from 'react-router-dom';
import ShopPage from './pages/shop-pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './Components/Header/header'


function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndSignUp} />
    </Switch>
    </div>
  );
}

export default App;
