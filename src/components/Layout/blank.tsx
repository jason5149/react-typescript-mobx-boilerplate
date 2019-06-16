import * as React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

class BlankLayout extends React.Component<RouteConfigComponentProps, {}> {
  goHome = () => {
    const { history } = this.props;

    history.push('/app/home');
  }

  render() {
    const { route } = this.props;

    return (
      <div>
        Blank
        <button onClick={this.goHome}>home</button>
        {renderRoutes(route && route.routes)}
      </div>
    );
  }
};

export default BlankLayout;
