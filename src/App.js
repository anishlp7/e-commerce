import React from 'react';
import Homepage from './pages/homepage/homepage'
import './App.css';
import { Switch,Route } from 'react-router-dom';

const HatsPage = () => (
  <h1>HATS Page</h1>
)

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/hats" component={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
