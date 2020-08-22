import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainNavigation from './shared/components/navigation/main-navigation/main-navigation.component';
import BouncyCastles from './products/bouncy-castles-page/components/bouncy-castles/bouncy-castles.component';
import Login from './users/login/login.component';
import styles from './App.module.scss';

class App extends React.Component {
  constructor(pros) {
    super(pros);
  }
  
  render() {
    const isAuth = true;
    return (
        <BrowserRouter>
          <MainNavigation />
          <Switch>
            <Route exact path="/" render={() =>
                isAuth ? (
                    <Redirect to='/products'/>
                ) : (<Login/>)
            }/>
            <Route path="/products" component={BouncyCastles}/>
            {/*<Route path="/" component={} />*/}
            {/*<Route path="/" component={} />*/}
            {/*<Route path="/" component={} />*/}
            {/*<Route path="/" component={} />*/}
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;