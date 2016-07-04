import React, { Component, PropTypes }  from 'react';

import Button                           from 'react-bootstrap/lib/Button';

import Spinner                          from './Spinner.jsx';

import omit                             from 'lodash/omit';


export default class ButtonLoader extends Component {
  static propTypes = {
    icon:           PropTypes.node,
    loading:        PropTypes.bool,
    children:       PropTypes.node,
    onClick:        PropTypes.func,
    disabled:       PropTypes.bool,
    bsStyle:        PropTypes.string
  };

  static defaultProps = {
    icon:           null,
    loading:        false,
    children:       null,
    style: {}
  };

  renderIcon() {
    const { loading, icon } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return icon;
  }

  render() {
    const { disabled, loading, children } = this.props;
    const buttonDisabled = disabled || loading;

    const props = omit(this.props, ['disabled', 'loading', 'children', 'icon']);

    return (
      <Button disabled={buttonDisabled} {...props}>{this.renderIcon()} {children}</Button>
    );
  }
}
