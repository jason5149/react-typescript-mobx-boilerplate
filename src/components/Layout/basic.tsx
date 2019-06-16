import * as React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

class BasicLayout extends React.Component<RouteConfigComponentProps, {}> {
  render() {
    const { route } = this.props;

    return (
      <div>
        Basic
        {renderRoutes(route && route.routes)}
      </div>
    );
  }
};

export default BasicLayout;
