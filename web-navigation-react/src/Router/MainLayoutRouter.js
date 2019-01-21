import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '../Page/Layout/MainLayout/MainLayout';
import HomePage from '../Page/HomePage';
import TestFile from '../Page/testFile';

class MainLayoutRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const testCount = 1;
    // if (testCount) return <Redirect to={{ pathname: 'login' }} />;
    return (
      <MainLayout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/testFile" component={TestFile} />
          <Redirect to={{ pathname: '/404' }} />
        </Switch>
      </MainLayout>
    );
  }
}

export default MainLayoutRouter;
