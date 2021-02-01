import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as ReactIcon from '../../assets/icons';

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: ${({ size }) => (size === 'small' ? '20px' : '24px')};
    height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  }
`;

export default function Icon({ icon, size }) {
  const reactIcon = ReactIcon[icon];
  return (
    <Container size={size}>{icon && React.createElement(reactIcon)}</Container>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
};

Icon.defaultProps = {
  size: 'small',
};
