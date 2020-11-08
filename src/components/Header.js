import React from 'react';
import styled from 'styled-components';

import { Container } from '../styles/LayoutStyles';
import Logo from './Logo';

const HeaderHolderStyle = styled.div`
  border-bottom: 1px solid var(--color-grey);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 80;
  background-color: ${({ theme }) =>
    theme.mode === 'dark-mode'
      ? 'var(--color-bg-background)'
      : 'var(--color-white)'};
`;

const HeaderStyles = styled.header`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 140px auto auto;
  align-items: center;
`;

const Header = ({ children }) => {
  return (
    <HeaderHolderStyle>
      <Container>
        <HeaderStyles>
          <Logo />
          {children}
        </HeaderStyles>
      </Container>
    </HeaderHolderStyle>
  );
};

export default Header;
