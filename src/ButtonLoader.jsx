import React, { PropTypes } from 'react';
import Button               from 'react-bootstrap/lib/Button';
import Spinner              from './Spinner';

const propTypes = {
  bsStyle:        PropTypes.string,
  children:       PropTypes.node,
  disabled:       PropTypes.bool,
  icon:           PropTypes.node,
  loading:        PropTypes.bool,
  spinColor:      PropTypes.string,
};

function ButtonLoader({
  bsStyle   = 'default',
  children  = null,
  disabled  = false,
  icon      = null,
  loading   = false,
  spinColor = '#fff',
  ...rest,
}) {
  function renderIcon() {
    if (loading) {
      return <Spinner spinColor={spinColor} />;
    }

    return icon;
  }

  const buttonDisabled = disabled || loading;

  return <Button bsStyle={bsStyle} disabled={buttonDisabled} {...rest}>{renderIcon()} {children}</Button>;
}

ButtonLoader.propTypes = propTypes;

export default ButtonLoader;

export { ButtonLoader, Spinner };
