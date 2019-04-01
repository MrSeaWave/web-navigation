import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './index.less';

const { Content } = Layout;

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*   eslint-disable-next-line no-unused-vars */
  static getDerivedStateFromProps(nextProps, nextState) {
    return null;
  }

  /* eslint-disable no-unused-vars */

  componentDidUpdate(prevProps, prevState, snapshot) {}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  /* eslint-enable no-unused-vars */

  _renderHeader = () => {
    return <header className="main-layout-header">React 版导航</header>;
  };

  _renderContent = () => {
    const { children } = this.props;
    return (
      <Content className="main-layout-content">
        <div className="main-layout-content-children">{children}</div>
        {this._renderFooter()}
      </Content>
    );
  };

  _renderFooter = () => {
    return (
      <footer className="main-layout-content-footer">
        Made with
        <Icon type="sync" spin className="footer-icon" />
        Sea
      </footer>
    );
  };

  render() {
    // console.log('this.props', this.props);

    return (
      <div className="main-layout">
        <Layout>
          {this._renderHeader()}
          {this._renderContent()}
        </Layout>
      </div>
    );
  }
}

export default MainLayout;
