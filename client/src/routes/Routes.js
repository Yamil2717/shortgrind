import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Vote from '../pages/vote/vote';
import HowToConnect from '../pages/howtoconnect/howtoconnect';
import WoWConnect from '../pages/howtoconnect/connect/wow';
import DyDConnect from '../pages/howtoconnect/connect/dyd';
import CEConnect from '../pages/howtoconnect/connect/ce';
import DtDConnect from '../pages/howtoconnect/connect/dtd';
import TermsOfService from '../pages/termsofservice/termsofservice';
import Login from '../pages/login/login';
import Singup from '../pages/signup/signup';
import MyAccount from '../pages/myaccount/myaccount';
import Logout from '../pages/logout/logout';
import FourOhFour from '../pages/errors/FourOhFour';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Home loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />}/>
        <Route exact path='/vote' component={Vote} />
        <Route exact path='/how-to-connect' component={HowToConnect} />
        <Route exact path='/how-to-connect/world-of-warcraft/connect' component={WoWConnect} />
        <Route exact path='/how-to-connect/dungeons-and-dragons/connect' component={DyDConnect} />
        <Route exact path='/how-to-connect/conan-exiles/connect' component={CEConnect} />
        <Route exact path='/how-to-connect/7-day-to-die/connect' component={DtDConnect} />
        <Route exact path='/terms-of-service' component={TermsOfService} />
        <Route exact path='/login' component={() => <Login loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />} />
        <Route exact path='/sign-up' component={Singup} />
        <Route exact path='/account' component={() => <MyAccount loggedIn={props.loggedIn} />} />
        <Route exact path='/logout' component={() => <Logout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />} />
        <Route path='*' component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;