import * as React from 'react';

export interface IAsyncLoaderState {
  Component: any,
};

export default (WrappedComponent: any): any => {
  return class extends React.Component<{}, IAsyncLoaderState> {
    state: IAsyncLoaderState = {
      Component: null,
    };

    async componentDidMount() {
      const { default: Component } = await WrappedComponent();

      this.setState({
        Component,
      });
    }

    render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }
};
