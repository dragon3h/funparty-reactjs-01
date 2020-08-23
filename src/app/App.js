import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainNavigation from './shared/components/navigation/main-navigation/main-navigation.component';
import BouncyCastles from './products/bouncy-castles-page/components/bouncy-castles/bouncy-castles.component';
import Login from './users/login/login.component';
import Schedule from './schedule/components/schedule.component';
import Dashboard from './dashboard/components/dashboard.component';
import styles from './App.module.scss';
import BouncyCastleDetails
  from './products/bouncy-castles-page/components/bouncy-castle-details/bouncy-castle-details.component';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const isAuth = false;
    return (
        <BrowserRouter>
          <MainNavigation />
          <Switch>
            <Route exact path="/" render={() =>
                isAuth ? (
                    <Redirect to='/products'/>
                ) : (<Login/>)
            }/>
            <Route path="/products/bouncy-castles" component={BouncyCastles}/>
            <Route path="/products/bouncy-castle/:id" component={BouncyCastleDetails}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/dashboard" component={Dashboard} />
            {/*<Route path="/" component={} />*/}
            {/*<Route path="/" component={} />*/}
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;