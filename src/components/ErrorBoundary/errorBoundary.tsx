import * as React from 'react';
import classnames from 'classnames';

export interface ErrorBoundaryProps {
  children: React.ReactNode,
  prefixCls?: string,
};

export interface ErrorBoundaryState {
  error?: Error | null,
  info?: React.ErrorInfo | null,
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
    info: null,
  };

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      error,
      info,
    });
  }

  render() {
    const { children, prefixCls } = this.props;
    const { error, info } = this.state;

    if (error) {
      const cls: string = classnames({
        [`${prefixCls}`]: !!prefixCls,
      });

      return (
        <div className={cls}>
          {error && error.toString()}
          {info && info.componentStack}
        </div>
      );
    }

    return children;
  }
};

export default ErrorBoundary;
