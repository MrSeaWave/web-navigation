import React, { Component } from 'react';

class TestProps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    // console.log('TestProps');
    return (
      <div>
        {children}
        <button onClick={() => this.forceUpdate()} type="button">cclikkk</button>
      </div>
    );
  }
}

export default TestProps;
