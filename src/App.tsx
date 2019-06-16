import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'mobx-react';
import stores from '@models/index';
import ErrorBoundary from '@components/ErrorBoundary';
import routes from '@routes/index';
// import user from '@assets/img/user.png';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider {...stores}>
        <ErrorBoundary>
          <Router>
            {renderRoutes(routes)}
          </Router>
        </ErrorBoundary>
      </Provider>
    )
  }
}

export default App;