import React, { Component } from 'react';
import { Button } from 'antd';
import TestProps from './TestProps';
import TestChildren from './TestChildren';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        首页
        {/* <div style={{ backgroundColor: 'red', height: 1000 }}>222</div> */}
        <TestProps>
          <TestChildren />
        </TestProps>
        <Button type="primary">button</Button>
      </div>
    );
  }
}

export default HomePage;
