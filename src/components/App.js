import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormContainer from './FormContainer';
import Navbar from './Navbar';
import PurchasesList from './PurchasesList';
import NotificationsContainer from './NotificationsContainer';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/purchases'>
          <PurchasesList /> 
        </Route>
        <Route path='/'>
          <FormContainer /> 
        </Route>
      </Switch>

      <NotificationsContainer />
    </Router>
  );
}
