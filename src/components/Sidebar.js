/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Spacer from './Spacer';

const SidebarContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const SidebarItemContainer = styled.li`
  list-style: none;
  margin-bottom: 4px;

  a,
  button {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 16px;
    border-radius: 6px;

    &:hover {
      background: #ededed50;
    }
  }

  button {
    border: none;
    cursor: pointer;
    background: transparent;
  }

  a.active {
    background: #ededed;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem icon="Search" isButton>
        Search
      </SidebarItem>
      <SidebarItem icon="InsertChartOutlined" href="/">
        Overview
      </SidebarItem>
      <SidebarItem icon="Snooze" href="/snooze">
        Snoozed
      </SidebarItem>
      <SidebarItem icon="Collection" href="/collection">
        Saved
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarItem = ({ href, icon, isButton, children }) => {
  const contentMarkup = isButton ? (
    <button type="button">
      <Icon icon={icon} />
      <Spacer size={8} />
      {children}
    </button>
  ) : (
    <NavLink exact to={href}>
      <Icon icon={icon} />
      <Spacer size={8} />
      {children}
    </NavLink>
  );

  return <SidebarItemContainer>{contentMarkup}</SidebarItemContainer>;
};

SidebarItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isButton: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

SidebarItem.defaultProps = {
  href: null,
  isButton: false,
};
