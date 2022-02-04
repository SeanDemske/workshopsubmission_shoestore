import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

const Side = styled.div`
  /* Spaceholder element to align Nav to center */
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-self: center;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  margin: 0 32px;

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  &:hover {
    filter: brightness(150%);
  }
`;

export default Header;
