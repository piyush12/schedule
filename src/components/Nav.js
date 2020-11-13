import React from 'react';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';

import useToggleTheme from '../hooks/useToggleTheme';
import { Nav, SignUpStyle, ButtonStyle } from '../styles/NavStyles';
import useScrollSection from '../hooks/useScrollSection';

export const Navigation = () => {
  const featuresSection = useScrollSection('features');
  const pricingSection = useScrollSection('pricing');

  return (
    <Nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              featuresSection.onClick('features');
            }}
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              pricingSection.onClick('pricing');
            }}
          >
            Pricing
          </a>
        </li>
        <li>
          <a href="#">About us</a>
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
