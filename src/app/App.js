import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from './redux/user/user.selectors';
import MainNavigation from './shared/components/navigation/main-navigation/main-navigation.component';
import Home from './home/component/home.component';
import BouncyCastles from './products/bouncy-castles-page/components/bouncy-castles/bouncy-castles.component';
import Mascots from './products/mascots-page/components/mascots/mascots.component';
import LoginRegister from './users/login-register-page/login-register.component';
import Schedule from './schedule/components/schedule.component';
import Dashboard from './dashboard/components/dashboard.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import styles from './App.module.scss';
import BouncyCastleDetails
  from './products/bouncy-castles-page/components/bouncy-castle-details/bouncy-castle-details.component';
import UserProfile from './users/profile/user-profile.component';
import {setCurrentUser} from './redux/user/user.actions';
import Orders from './orders/components/orders/orders.component';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(user);
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    const isAuth = this.props.currentUser;
    if (isAuth) {
      return (
          <React.Fragment>
            <MainNavigation/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/products/bouncy-castles" component={BouncyCastles}/>
              <Route path="/products/bouncy-castle/:id" component={BouncyCastleDetails}/>
              <Route path="/products/mascots" component={Mascots} />
              <Route path="/schedule" component={Schedule}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/user-profile" component={UserProfile}/>
              <Route path="/orders" component={Orders}/>
            </Switch>
          </React.Fragment>
      );
    } else {
      return (
          <Switch>
            <Route path="/" component={LoginRegister}/>
          </Switch>
      );
    }
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);