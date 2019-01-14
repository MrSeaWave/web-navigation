import React, { Component } from 'react';
import './Style/App.css';
import RouterConfig from './Router';

class App extends Component {
  render() {
    // add provider
    return (
      <div>
        <RouterConfig />
      </div>
    );
  }
}

export default App;
