import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainNavigation from './shared/components/navigation/main-navigation/main-navigation.component';
import Home from './home/component/home.component';
import BouncyCastles from './products/bouncy-castles-page/components/bouncy-castles/bouncy-castles.component';
import Login from './users/login/login.component';

import LoginRegister from './users/login-register-page/login-register.component';
import Schedule from './schedule/components/schedule.component';
import Dashboard from './dashboard/components/dashboard.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import styles from './App.module.scss';
import BouncyCastleDetails
  from './products/bouncy-castles-page/components/bouncy-castle-details/bouncy-castle-details.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: null,
    };
    
    this.unsubscribeFromAuth = null;
  }
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          this.setState({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data(),
                },
              },
              () => {
                console.log(this.state);
              });
        });
      }
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    const isAuth = this.state.currentUser;
    if (isAuth) {
      return (
          <BrowserRouter>
            <MainNavigation/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/products/bouncy-castles" component={BouncyCastles}/>
              <Route path="/products/bouncy-castle/:id" component={BouncyCastleDetails}/>
              <Route path="/schedule" component={Schedule}/>
              <Route path="/dashboard" component={Dashboard}/>
            </Switch>
          </BrowserRouter>
      );
    } else {
      return (
          <BrowserRouter>
            <Switch>
              <Route path="/" component={LoginRegister}/>
            </Switch>
          </BrowserRouter>
      );
    }
  }
}

export default App;