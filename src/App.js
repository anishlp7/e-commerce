import React from 'react';
import Homepage from './pages/homepage/homepage'
import './App.css';
import { Switch,Route } from 'react-router-dom';
import ShopPage from './pages/shop-pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './Components/Header/header'
import { auth } from './firebase/firebase.utils'


class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
      </div>
    );
  }
}
export default App;
