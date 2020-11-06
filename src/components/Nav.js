import React from 'react';
import styled from 'styled-components';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';

import Button from '../shared/Button';
import useToggleTheme from '../hooks/useToggleTheme';

const Nav = styled.nav`
  text-align: ${({ align }) => align || 'left'};

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: ${({ align }) =>
      align === 'right' ? 'flex-end' : 'flex-start'};
  }

  li {
    padding: ${({ align }) => (align === 'right' ? '0 0.5rem' : '0 2rem')};
    display: flex;
    align-items: center;
  }

  a {
    color: ${({ align }) =>
      align === 'right'
        ? 'var(--color-nav-right-text)'
        : 'var(--color-navigation-text)'};
    font-size: 1.5rem;
    padding: 0 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const SignUpStyle = styled.a`
  background: var(--color-nav-right-text);
  box-shadow: 0px 4px 5px rgba(24, 30, 41, 0.1);
  border-radius: 16px;
  color: var(--color-white) !important;
  padding: 0.9rem 1.9rem !important;
`;

const ButtonStyle = styled(Button)`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  color: ${({ mode }) => (mode === 'light-mode' ? '#ffc107' : '#fff')};
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
      </ul>
    </Nav>
  );
};

export const NavigationRight = () => {
  const { theme, setThemeMode } = useToggleTheme();

  const handleThemeToggle = () => {
    setThemeMode();
  };

  return (
    <Nav align="right">
      <ul>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <SignUpStyle href="">Sign Up</SignUpStyle>
        </li>
        <li>
          <ButtonStyle onClick={handleThemeToggle} mode={theme}>
            {theme === 'light-mode' ? <BsMoon /> : <FiSun />}
          </ButtonStyle>
        </li>
      </ul>
    </Nav>
  );
};