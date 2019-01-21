import React, { Component } from 'react';
import './index.less';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, nextState) { // eslint-disable-line no-unused-vars
    return null;
  }

  /* eslint-disable no-unused-vars */

  componentDidUpdate(prevProps, prevState, snapshot) {}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  /* eslint-enable no-unused-vars */

  render() {
    // console.log('this.props', this.props);
    const { children } = this.props;
    return (
      <div className="test">
        <h2>主要布局</h2>
        {children}
      </div>
    );
  }
}

export default MainLayout;
