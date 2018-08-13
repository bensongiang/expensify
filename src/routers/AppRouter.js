import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header'
import AddExpense from '../components/AddExpense'
import Dashboard from '../components/Dashboard'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import NotFound from '../components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/add" component={AddExpense} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;