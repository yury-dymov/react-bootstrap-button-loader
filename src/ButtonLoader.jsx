import React     from 'react';
import PropTypes from 'prop-types';
import Button    from 'react-bootstrap/Button';
import Spinner   from './Spinner';

const propTypes = {
  bsStyle:        PropTypes.string,
  children:       PropTypes.node,
  disabled:       PropTypes.bool,
  icon:           PropTypes.node,
  loading:        PropTypes.bool,
  spinColor:      PropTypes.string,
  spinAlignment:  PropTypes.string
};

function ButtonLoader({
  bsStyle   = 'default',
  children  = null,
  disabled  = false,
  icon      = null,
  loading   = false,
  spinColor = '#fff',
  spinAlignment = 'left',
  ...rest,
}) {
  function renderIcon() {
    if (loading) {
      return <Spinner spinColor={spinColor} spinAlignment={spinAlignment} />;
    }

    return icon;
  }

  const buttonDisabled = disabled || loading;

  return <Button bsStyle={bsStyle} disabled={buttonDisabled} {...rest}>{renderIcon()} {children}</Button>;
}

ButtonLoader.propTypes = propTypes;

export default ButtonLoader;

export { ButtonLoader, Spinner };
