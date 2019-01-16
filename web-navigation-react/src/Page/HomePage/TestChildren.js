import React, { Component } from 'react';

class TestChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('TestChildren');
    return (
      <div>
        <button onClick={() => this.forceUpdate()} type="button">
          cddddddChildrren
        </button>
      </div>
    );
  }
}

export default TestChildren;
