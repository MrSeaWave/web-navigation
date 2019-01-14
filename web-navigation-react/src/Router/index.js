import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../Page/Register/index';
import Login from '../Page/Login/index';
import MainLayoutRouter from './MainLayoutRouter';
import NotFound from '../Page/404/index';

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/404" component={NotFound} exact />
        <Route path="/" component={MainLayoutRouter} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterConfig;
