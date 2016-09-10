import React, { PropTypes } from 'react';
import SpinnerIcon          from 'react-loader';

const propTypes = {
  bsStyle:        PropTypes.string,
  spinColorDark:  PropTypes.string,
  spinColorLight: PropTypes.string,
  spinConfig:     PropTypes.object,
};

function Spinner({
  bsStyle         = 'default',
  spinColorDark   = '#444' ,
  spinColorLight  = '#fff',
  spinConfig      = {
    length: 4,
    lines:  15,
    radius: 3,
    width:  2,
  },
  ...rest,
}) {
  const style = {
    display:      'inline-block',
    height:       '11px',
    position:     'relative',
    width:        '16px',
  };

  const spinColor = (!bsStyle || bsStyle === 'default') ? spinColorDark : spinColorLight;

  return (
    <div style={{ display: 'inline-block' }}>
      <div style={style} {...rest}>
        <SpinnerIcon {...spinConfig} color={spinColor} loaded={false} />
      </div>
    </div>
  );
}

Spinner.propTypes = propTypes;

export default Spinner;
