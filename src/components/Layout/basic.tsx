import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { Layout, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

@observer
class BasicLayout extends React.Component<RouteConfigComponentProps, {}> {
  constructor(props: RouteConfigComponentProps) {
    super(props);

    this.handleToggleSider = this.handleToggleSider.bind(this);
  }

  @observable
  private siderStatus: boolean = false;

  @action
  handleToggleSider() {
    this.siderStatus = !this.siderStatus;
  }

  renderSider() {
    return (
      <Sider
        className="sider-menu fixed-sider"
        width="256"
        trigger={null}
        collapsible
        collapsed={this.siderStatus}
      >
        <div className="logo" />
      </Sider>
    );
  }

  renderHeader() {
    return (
      <Header
        className="fixed-header"
        style={{ width: `calc(100% - ${this.siderStatus ? '80px' : '256px'})` }}
      >
        <div className="global-header">
          <span
            className="trigger"
            onClick={this.handleToggleSider}
          >
            <Icon type={this.siderStatus ? "menu-unfold" : "menu-fold"} />
          </span>
        </div>
      </Header>
    );
  }

  renderContent() {
    const { route } = this.props;

    return (
      <Content className="basic-content">
        {renderRoutes(route && route.routes)}
      </Content>
    );
  }

  render() {
    return (
      <Layout className="basic-layout">
        {this.renderSider()}
        <Layout style={{ minHeight: "100vh" }}>
          {this.renderHeader()}
          {this.renderContent()}
        </Layout>
      </Layout>
    );
  }
};

export default BasicLayout;
