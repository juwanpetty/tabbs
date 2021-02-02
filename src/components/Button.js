import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';
import Spacer from './Spacer';

const StyledButton = styled.button`
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  padding: ${({ hasChildren }) => (hasChildren ? '5px 16px' : '5px')};

  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Button = ({ children, icon, type, onClick }) => {
  const hasChildren = Boolean(children);

  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton type={type} onClick={onClick} hasChildren={hasChildren}>
      {icon && <Icon icon={icon} />}
      {icon && children && <Spacer size={8} />}
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: null,
  icon: null,
};
