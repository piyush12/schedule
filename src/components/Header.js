import React from 'react';
import styled from 'styled-components';

import { Container } from '../styles/LayoutStyles';
import Logo from './Logo';

const HeaderStyles = styled.header`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 140px auto auto;
  align-items: center;
`;
const Border = styled.hr`
  padding: 0;
  margin: 0;
  height: 1px;
  background-color: var(--color-grey);
  border: 0;
`;

const Header = ({ children }) => {
  return (
    <>
      <Container>
        <HeaderStyles>
          <Logo />
          {children}
        </HeaderStyles>
      </Container>
      <Border />
    </>
  );
};

export default Header;
