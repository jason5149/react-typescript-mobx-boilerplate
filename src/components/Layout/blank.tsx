import * as React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { Layout, Button } from 'antd';

interface IBlankLayoutProps extends RouteConfigComponentProps {}

class BlankLayout extends React.Component<IBlankLayoutProps, {}> {
  render() {
    const { route } = this.props;

    return (
      <Layout>
        {renderRoutes(route && route.routes)}
      </Layout>
    );
  }
};

export default BlankLayout;
