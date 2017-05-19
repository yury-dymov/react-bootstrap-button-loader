import React       from 'react';
import PropTypes   from 'prop-types';
import SpinnerIcon from 'react-loader';

const propTypes = {
  spinColor:      PropTypes.string,
  spinConfig:     PropTypes.object,
};

function Spinner({
  spinColor       = '#fff',
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

  return (
    <div style={{ display: 'inline-block' }} {...rest}>
      <div style={style}>
        <SpinnerIcon {...spinConfig} color={spinColor} loaded={false} />
      </div>
    </div>
  );
}

Spinner.propTypes = propTypes;

export default Spinner;
