import React, { Component } from 'react';
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
