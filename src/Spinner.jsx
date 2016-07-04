import React, { Component, PropTypes }  from 'react';

import SpinnerIcon                      from 'react-loader';

export default class ButtonLoader extends Component {
  static propTypes = {
    bsStyle:        PropTypes.string,
    spinColorDark:  PropTypes.string,
    spinColorLight: PropTypes.string,
    spinConfig:     PropTypes.object
  };

  static defaultProps = {
    spinConfig:     {
      lines:  15,
      length: 4,
      width:  2,
      radius: 3
    },
    spinColorDark:  '#444',
    spinColorLight: '#fff'
  };
  
  render() {
    const { bsStyle, spinColorDark, spinColorLight } = this.props;

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
}
