/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Icon from '@/components/Icon';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 16px;
    border-radius: 6px;
  }

  button {
    border: none;
    cursor: pointer;
    background: transparent;
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
      <SidebarItem icon="Snooze" href="/">
        Snoozed
      </SidebarItem>
      <SidebarItem icon="Collection" href="/">
        Saved
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarItem = ({ as, href, icon, isButton, children }) => {
  const contentMarkup = isButton ? (
    <button type="button">
      <Icon icon={icon} />
      <Spacer size={8} />
      {children}
    </button>
  ) : (
    <Link as={as} href={href}>
      <a>
        <Icon icon={icon} />
        <Spacer size={8} />
        {children}
      </a>
    </Link>
  );

  return <SidebarItemContainer>{contentMarkup}</SidebarItemContainer>;
};

SidebarItem.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isButton: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

SidebarItem.defaultProps = {
  as: null,
  href: null,
  isButton: false,
};
