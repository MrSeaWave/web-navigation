import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../Page/Register/index';
import Login from '../Page/Login/index';
import MainLayoutRouter from './MainLayoutRouter';
import NotFound from '../Page/404/index';
import config from '../../config';

// TODO http://localhost:8080/login===http://localhost:8080/basePath/login 这是个错误的等于，
// 控制台出现了warning
const RouterConfig = () => {
  return (
    <BrowserRouter basename={config.basePath}>
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
