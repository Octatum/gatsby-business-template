import React from 'react';
import { Button as RebassButton } from 'rebass';

function Button(props) {
  return <RebassButton style={{ border: 'none' }} {...props} />;
}

Button.defaultProps = {
  color: 'white',
  fontSize: 2,
  bg: 'main',
  fontWeight: 'normal',
  borderRadius: 0,
  px: 3,
  py: 2,
};

export default Button;
