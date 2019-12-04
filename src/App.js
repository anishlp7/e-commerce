import React from 'react';
import Homepage from './pages/homepage/homepage'
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './Components/Header/header'
import Checkout from './pages/checkout/checkout';
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/User/UserAction';
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './redux/User/userSelector';



class App extends React.Component {

  unsubscribeFromAuth = null;

    
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          });
        });
       
      } else {
        setCurrentUser(userAuth)
      }


    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp />) } />
      </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
