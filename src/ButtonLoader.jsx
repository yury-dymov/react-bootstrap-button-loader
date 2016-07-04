import React, { Component, PropTypes }  from 'react';

import Button                           from 'react-bootstrap/lib/Button';
import SpinnerIcon                      from 'react-loader';

import omit                             from 'lodash/omit';

export default class ButtonLoader extends Component {
  static propTypes = {
    icon:           PropTypes.node,
    loading:        PropTypes.bool,
    children:       PropTypes.node,
    onClick:        PropTypes.func,
    disabled:       PropTypes.bool,
    bsStyle:        PropTypes.string,
    spinColorDark:  PropTypes.string,
    spinColorLight: PropTypes.string,
    spinConfig:     PropTypes.object
  };

  static defaultProps = {
    icon:           null,
    loading:        false,
    spinConfig:     {
      lines:  15,
      length: 4,
      width:  2,
      radius: 3
    },
    spinColorDark:  '#444',
    spinColorLight: '#fff',
    children:       null,
    style: {}
  };

  renderIcon() {
    const { loading, icon, bsStyle, spinColorDark, spinColorLight } = this.props;

    if (loading) {
      const style = {
        position:     'relative',
        display:      'inline-block',
        width:        '16px',
        height:       '11px'
      };

      const spinColor = (!bsStyle || bsStyle === 'default') ? spinColorDark : spinColorLight;

      return (
        <div style={{ display: 'inline-block' }}>
          <div style={style}>
            <SpinnerIcon {...this.props.spinConfig} color={spinColor} loaded={false} />
          </div>
        </div>
      );
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
