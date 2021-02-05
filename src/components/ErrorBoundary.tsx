/*
 * @Author: wangjiaxin
 * @Date: 2021-02-03 11:41:09
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import * as React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  reset() {
    this.setState({ error: null });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return null;
    }

    return children;
  }
}

export default ErrorBoundary;
