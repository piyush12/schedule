import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Navigation, NavigationRight } from './Nav';
import Footer from './Footer';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import useToggleTheme from '../hooks/useToggleTheme';

const Layout = ({ children }) => {
  const { theme } = useToggleTheme();
  const mode = { mode: theme };

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Header>
        <Navigation />
        <NavigationRight />
      </Header>
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
