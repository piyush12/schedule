import React from 'react';
import styled from 'styled-components';

import useToggleTheme from '../hooks/useToggleTheme';
import { APP_IMAGES } from '../utils/Images';

const LogoStyles = styled.div`
  width: 120px;

  img {
    width: 100%;
  }
`;

const Logo = () => {
  const { logo, logoWhite } = APP_IMAGES;
  const { theme } = useToggleTheme();
  return (
    <LogoStyles>
      <img
        src={theme === 'light-mode' ? logo : logoWhite}
        alt="schedule logo"
      />
    </LogoStyles>
  );
};

export default Logo;
